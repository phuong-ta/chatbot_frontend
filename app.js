const express = require('express');


// Next initialize the application
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');


// routing path
app.get('/', (req, res) => {

  // The render method takes the name of the html
  // page to be rendered as input.
  // This page should be in views folder 
  // in the root directory.
  let data = {
      name: 'Akashdeep',
      hobbies: ['playing football', 'playing chess', 'cycling']
  }

  res.render('home', { data: data });
});




// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});