require('dotenv').config();
const server = require('./app')
const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
  console.log(`--- :: Server is running on port: ${PORT} :: ---`);
});