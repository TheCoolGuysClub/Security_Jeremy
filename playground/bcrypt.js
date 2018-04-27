const bcrypt = require('bcryptjs');
const password = 'abc';
console.log('password:', password);
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log("hashed password:", hash);
//   })
// })
bcrypt.hash(password, 10)
  .then((hash) => {
    console.log('hashed password', hash);
  })
  .catch(e => {
    console.log(e);
  })

const hashedPassword = '$2a$10$hfRBhOV002z2cfEbvfU6OegIY6QSUKGdxN/GpEodWnF5rkuXPKhuy';

bcrypt.compare(password, hashedPassword, (err, result) => {
  console.log('password is valid:', result);
})
