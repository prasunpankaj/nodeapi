const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const dotenv = require('dotenv');


dotenv.config();

//DB Connection Establishment
mongoose.connect(
	process.env.MONGO_URI,
	{
	 useUnifiedTopology: true, 
	 useNewUrlParser: true, 
	 useFindAndModify: false,
  	 useCreateIndex: true
  	}
	)
.then(() => console.log("DB has Connection DONE !!!"))

mongoose.connection.on('error', err => {
	console.log("DB Connection ERROR !!: ${err.message}")
});


//Bring in Routes
const postRoutes = require('./routes/post')

const ownMiddelware = (req, res, next) => {
	console.log("Own Middelware Apploed here!!!!");
	//console.log(req);
	//console.log(res);
	next();
}

//Middelware

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(ownMiddelware);
app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server Listing from port ${port}`)
});