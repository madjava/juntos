const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send({ message: "Hello world!" });
});

/** 
 * 1. Create a route /unconference that returns an object with the following info
 *      Company Name, Event Location, Date
 * 
 * 2. Create a route called /participants that returns an object with a list of participants with details
 *      Full name, Session Attended, Rating
 * 
 * 3. Create a route called /unconference/session that returns a list of session
 * 
 * 4. Create a route called /participants/{id} that returns an object wit info on a specific participant with details
 *      Full name, Session Attended, Rating
 */
const port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});