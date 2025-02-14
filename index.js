// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import axios from "axios";
import express from "express";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random"

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  
  try {
    const result = await axios.get(API_URL);
    const user = result.data.username;
    const secret = result.data.secret;

    res.render("index.ejs", { secret: secret, user: user });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

});

app.listen(port, () => {
  console.log('Listening on port', port);
});
