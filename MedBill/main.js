const express = require('express');
const multer = require('multer');
const app = express();

// create an array to store the medical bills
const medicalBills = [];

// set up multer for file uploading
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// route to handle file upload and bill information
app.post('/upload-bill', upload.single('bill'), function (req, res, next) {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }

  // store the medical bill information
  const medicalBill = {
    patientName: req.body.patientName,
    patientAddress: req.body.patientAddress,
    hospitalName: req.body.hospitalName,
    dateOfService: req.body.dateOfService,
    billAmount: req.body.billAmount,
    billFile: file.buffer
  };
  medicalBills.push(medicalBill);

  res.send('Medical bill uploaded successfully');
});


// start the server
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Medical bill upload service listening at http://%s:%s', host, port);
});

/**
 * In this example, we use the multer library to handle file uploading. We set up a disk storage destination and a file naming convention, 
 * then create a multer instance with the specified storage. The /upload-bill route uses the upload.single() method to handle a single file upload. 
 * The uploaded file is available in the req.file object. If the file is not present, an error is returned.

Finally, we start the server using the app.listen() method, which listens on port 3000 by default. You can change this port to any other desired port.
 * In this example, we use the multer.memoryStorage() method to configure Multer to store the uploaded files in memory. 
 * The medical bill information, including the uploaded file as a buffer, is then stored in an array named medicalBills. 
 * Note that this array will be lost if the server is restarted. If you want to persist the data, you'll need to use a database.
 */