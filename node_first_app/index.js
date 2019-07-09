const express     = require("express");  // import the NPM dependancy package
const bodyParser  = require("body-parser");


const app = express();  // initialise express() inside of your app variable


app.use(bodyParser.json());  // parse body of incoming json requests


  // import route modules and pass your app
require("./routes/userRoutes")(app);


const PORT = 3000; // choose what port on which to run the server


app.listen(PORT, () => {
  console.log(`Server running`);// use the app variable and listen on the port
});