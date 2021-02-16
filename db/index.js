const mysql = require('mysql');

const connection = mysql.createConnection({
  user: "student",
  password: "student",
  database: "cow_list"
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
});

connection.makeQuery = (req, cb) => {
  if (req.method === 'GET') {
    let getQ = 'SELECT cow_name, cow_desc FROM cow_list_data;';

    connection.query(getQ, (err, records) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, records);
      }

    });
  }

  if (req.method === 'POST') {
    let postQ;
    postQ = `INSERT INTO cow_list_data (cow_name, cow_desc) VALUES ("${req.query.cow_name}", "${req.query.cow_desc}");`

    connection.query(postQ, (err, records) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, records);
      }

    });
  }

};

module.exports = connection;