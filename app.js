const express = require('express');


// Next initialize the application
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');



// Route to call the API and render the data 
app.get('/', async (req, res) => { 
  try { 
    // Create the URL with the provided date 
    const backend_url ="https://chatbot-backend-260287853257.europe-north1.run.app/list_files"
    // Call the API with GET method 
    const response = await axios.get(backend_url); 
    // Extract the EUR_per_kWh values into a list 
    const prices = response.data.map(item => item.EUR_per_kWh); 
    // Pass data into the render method 
    res.render('prices', { prices }); 
  } catch (error) { 
    console.error('Error fetching data from API:', error); 
    res.status(500).send('Error fetching data from API'); 
  } 
});






// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});