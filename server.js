const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB =
  process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD) ||
  process.env.DATABASE_LOCAL;

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.error('DB connection error:', err));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
