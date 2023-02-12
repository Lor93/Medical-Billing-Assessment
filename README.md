# Medical-Billing-Assessment
The goal of this assignment was to implement a simple medicl bill. With the following perimeter of get the patient information and the bill amount. I had to use an API that use a GET and POST function to excess the patient information and the medical bill. 

## Code Overview
 * In this example, we use the multer library to handle file uploading. We set up a disk storage destination and a file naming convention, 
 * then create a multer instance with the specified storage. The /upload-bill route uses the upload.single() method to handle a single file upload. 
 * The uploaded file is available in the req.file object. If the file is not present, an error is returned.

Finally, we start the server using the app.listen() method, which listens on port 3000 by default. You can change this port to any other desired port.
 * In this example, we use the multer.memoryStorage() method to configure Multer to store the uploaded files in memory. 
 * The medical bill information, including the uploaded file as a buffer, is then stored in an array named medicalBills. 
 * Note that this array will be lost if the server is restarted. If you want to persist the data, you'll need to use a database.

## Code generator
-The [main.js
](https://github.com/Lor93/Medical-Billing-Assessment/blob/main/MedBill/main.js) is the file that contain the assessment code.
