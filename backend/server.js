require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { checkJwt, attachUser } = require('./middlewares/authMiddleware');

const courseRoutes = require('./routes/courseRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Public route
app.get('/api/public', (req, res) => {
  res.json({ message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.' });
});

// Mount course routes
app.use('/api', courseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
