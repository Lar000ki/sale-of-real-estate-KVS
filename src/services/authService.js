// services/authService.js

const users = [
    { username: 'admin', password: 'admin_password', name: 'Admin' }
  ];
  
  export function authenticate(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user;
  }
  