// Database em que a api vai atuar. Altere as informações de acordo com sua database.
const mysql = require('mysql')
const database = mysql.createPool({
  user: 'root',
  password: '',
  database: 'atividade8',
  host: 'localhost',
  port: 3306
})
export { database }
