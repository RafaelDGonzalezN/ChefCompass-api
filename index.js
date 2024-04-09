const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`); // eslint-disable-line no-console
  });
}); 
