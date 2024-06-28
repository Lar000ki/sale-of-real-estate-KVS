const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'qwerty050',
  database: 'kvs'
});

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Настройка хранилища multer для загрузки фотографий
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const objectId = req.params.id;
    const uploadDir = path.join(__dirname, 'uploads', objectId.toString());
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});

const upload = multer({ storage: storage });

app.post('/register', async (req, res) => {
  const { phone, pass } = req.body;

  if (!phone || !pass) {
    return res.status(400).json({ error: 'Не все поля заполнены' });
  }

  try {
    const hashedPassword = await bcrypt.hash(pass, 10);

    const [result] = await pool.execute(
      'INSERT INTO users (firstname, lastname, pass, phone, admlvl) VALUES (?, ?, ?, ?, ?)',
      ['Контент', 'Контентов', hashedPassword, phone, 0]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Вы успешно зарегистрировались' });
    } else {
      res.status(500).json({ error: 'Ошибка регистрации' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка регистрации' });
  }
});

app.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ error: 'Не все поля заполнены' });
  }

  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE phone = ?', [phone]);

    if (rows.length === 0) {
      return res.status(400).json({ error: 'Пользователь не найден' });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.pass);

    if (!match) {
      return res.status(400).json({ error: 'Неверный пароль' });
    }

    res.status(200).json({
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        admlvl: user.admlvl
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка входа' });
  }
});

app.get('/objects', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM objects');
    res.json({ objects: rows });
  } catch (error) {
    console.error('Ошибка получения объектов:', error);
    res.status(500).json({ error: 'Ошибка получения объектов' });
  }
});

app.get('/objects/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.execute('SELECT * FROM objects WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Объект не найден' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка получения объекта' });
  }
});

app.post('/objectsadd', async (req, res) => {
  const { art, type, title, category, year, floors, floor, rooms, price, clientid, description } = req.body;

  if (!art || !type || !title || !category || !year || !floors || !floor || !rooms || !price || !clientid || !description) {
    return res.status(400).json({ error: 'Не все поля заполнены' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO objects (art, type, title, category, year, floors, floor, rooms, price, clientid, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [art, type, title, category, year, floors, floor, rooms, price, clientid, description]
    );

    if (result.affectedRows === 1) {
      const objectId = result.insertId; // Получаем ID нового объекта
      res.status(201).json({ message: 'Объект успешно добавлен', objectId });
    } else {
      res.status(500).json({ error: 'Ошибка добавления объекта' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка добавления объекта' });
  }
});

app.put('/objects/:id', async (req, res) => {
  const objectId = req.params.id;
  const {
    art,
    type,
    title,
    category,
    active,
    year,
    floors,
    floor,
    rooms,
    price,
    clientid,
    description
  } = req.body;

  try {
    const [result] = await pool.execute(
      'UPDATE objects SET art = ?, type = ?, title = ?, category = ?, active = ?, year = ?, floors = ?, floor = ?, rooms = ?, price = ?, clientid = ?, description = ? WHERE id = ?',
      [
        art ?? null,
        type ?? null,
        title ?? null,
        category ?? null,
        active ?? null,
        year ?? null,
        floors ?? null,
        floor ?? null,
        rooms ?? null,
        price ?? null,
        clientid ?? null,
        description ?? null,
        objectId
      ]
    );

    res.send({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка обновления объекта');
  }
});

app.put('/profile', async (req, res) => {
  const { id, firstname, lastname, phone, oldPassword, newPassword } = req.body;

  if (!id || !firstname || !lastname || !phone) {
    return res.status(400).json({ error: 'Не хватает данных (попробуй перезайти в аккаунт)' });
  }

  try {
    if (oldPassword && newPassword) {
      const [rows] = await pool.execute('SELECT pass FROM users WHERE id = ?', [id]);

      if (rows.length === 0) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }

      const user = rows[0];
      const match = await bcrypt.compare(oldPassword, user.pass);

      if (!match) {
        return res.status(400).json({ error: 'Неверный старый пароль' });
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      await pool.execute('UPDATE users SET pass = ? WHERE id = ?', [hashedNewPassword, id]);
    }

    await pool.execute('UPDATE users SET firstname = ?, lastname = ?, phone = ? WHERE id = ?', [firstname, lastname, phone, id]);

    const [updatedUserRows] = await pool.execute('SELECT firstname, lastname, phone, id FROM users WHERE id = ?', [id]);

    if (updatedUserRows.length === 0) {
      return res.status(404).json({ error: 'Пользователь не найден после обновления' });
    }

    const updatedUser = updatedUserRows[0];
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Ошибка обновления профиля:', error);
    res.status(500).json({ error: 'Ошибка обновления профиля' });
  }
});

app.post('/objects/:id/photos', upload.array('photos', 5), async (req, res) => {
  const objectId = req.params.id;
  const uploadDir = path.join(__dirname, 'uploads', objectId.toString());

  try {
    const existingFiles = fs.existsSync(uploadDir) ? fs.readdirSync(uploadDir) : [];
    const totalPhotos = existingFiles.length + req.files.length;

    if (totalPhotos > 5) {
      req.files.forEach(file => fs.unlinkSync(file.path));
      return res.status(400).json({ error: 'Объект не может иметь более 5 фотографий' });
    }

    const photoPaths = req.files.map(file => file.path);
    res.json({ success: true, photoPaths });
  } catch (error) {
    console.error('Error uploading photos:', error);
    res.status(500).json({ error: 'Error uploading photos' });
  }
});

app.post('/objectsdel/:id/photos/:filename', (req, res) => {
  const objectId = req.params.id;
  const filename = req.params.filename;

  if (req.body.delete === true) {
    const filePath = path.join(__dirname, 'uploads', objectId.toString(), filename);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Failed to delete photo:', err);
        return res.status(500).json({ error: 'Failed to delete photo' });
      }
      res.json({ success: true });
    });
  } else {
    res.status(400).json({ error: 'Invalid request' });
  }
});

app.get('/objects/:id/photos', (req, res) => {
  const objectId = req.params.id;
  const uploadDir = path.join(__dirname, 'uploads', objectId.toString());

  if (!fs.existsSync(uploadDir)) {
    return res.json({ photos: [] });
  }

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load photos' });
    }

    const photos = files.map(file => ({
      filename: file,
      path: `uploads/${objectId}/${file}`
    }));

    res.json({ photos });
  });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});
