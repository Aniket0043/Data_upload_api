const fs = require('fs');
const csv = require('csv-parser');
const Data = require('../models/dataModel');

async function handleUpload(req, res) {
  try {
    const fileStream = fs.createReadStream(req.file.path);
    const batchSize = 50; // Set the batch size according to your needs
    let batch = [];
    
    fileStream
      .pipe(csv())
      .on('data', async (data) => {
        batch.push(data);
        
        if (batch.length >= batchSize) {
          // Insert the batch into the database
          await Data.insertMany(batch);
          batch = [];
        }
      })
      .on('end', async () => {
        if (batch.length > 0) {
          // Insert any remaining items in the batch
          await Data.insertMany(batch);
        }
        
        res.status(200).send('Data uploaded to the database successfully.');
      });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing the CSV file.');
  }
}

module.exports = { handleUpload };

