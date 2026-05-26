const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Veritabanı bağlantısı
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB baglantisi basarili'))
  .catch(err => console.log('MongoDB hatasi:', err));

// Rotalar
app.use('/api/auth', require('./routes/auth'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Sunucu  portunda calisiyor));
