require('dotenv').config();


const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const dataRouter = require('./routes/dataRouter');

const app = express();
const port = process.env.PORT || 3000;
const dbStr = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';

mongoose.connect(dbStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.use('/data', dataRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

