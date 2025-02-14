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
