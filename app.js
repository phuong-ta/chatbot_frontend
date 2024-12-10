const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// Route to fetch data from FastAPI and render it
app.get('/index', async (req, res) => {
  try {
      const apiUrl = 'https://chatbot-backend-260287853257.europe-north1.run.app/list_files'; // FastAPI endpoint
      const response = await axios.get(apiUrl); // Fetch data from FastAPI
      const dataFiles = response.data.data_files;

      res.render('demo', { dataFiles }); // Pass data to the template
  } catch (error) {
      console.error('Error fetching API data:', error.message);
      res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
