const app = require('./app');
const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Running Server on http://localhost:${PORT}`);
});