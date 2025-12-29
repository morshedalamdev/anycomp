require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool({
     connectionString: process.env.DATABASE_URL,
     ssl: false
})

db.query('SELECT NOW()', (err, res) => {
     if (err) {
          console.error('DB Connection Error:', err);
     } else {
          console.log('--- :: Connected to Database :: ---');
     }
});

module.exports = db;