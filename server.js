const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/endpoint', (req, res) => {
  const sensorValue = req.body.sensor_value; // Assuming "sensor_value" is the name of the data sent by the NodeMCU
  
  // Process the received data
  // For example, you can store it in a database
  // Replace this with your actual data processing logic
  console.log('Received sensor value:', sensorValue);
  
  // Send a response (optional)
  res.status(200).send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
