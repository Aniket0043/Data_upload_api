# Bulk Data Upload API

This Node.js API allows users to upload large datasets in CSV format, validates the data, handles errors gracefully, and acknowledges the user upon successful data upload.

## Installation

Follow these steps to install and run the Bulk Data Upload API:

### Step 1: Install Dependencies

To install the required dependencies, open your terminal and run:

npm install

### Step 2: Install MongoDB Locally

This API uses MongoDB as a database. If you don't have MongoDB installed on your local machine, follow these steps:

Download MongoDB Community Server for your operating system.

Follow the installation instructions for your specific OS.

Start the MongoDB server.

If you prefer not to install MongoDB locally, you can configure the database connection in a .env file. 

Create a .env file in the root directory of your project 

### Step 3: Start the API

To start the API, run the following command:

npm start

The API will be available at http://localhost:3000.

### Step 4: Upload CSV File

Use a tool like Postman or any other HTTP client.

Send a POST request to the following URL: http://localhost:3000/data/upload.

In the request header, set Content-Type to multipart/form-data.

In the request body, select form-data.

Add the CSV file to upload, ensuring that the key matches the key in your Express route (e.g., 'csvFile').

Send the request.

Upon successful data upload, the API will respond with a 200 OK status and a message: "Data upload successful.