## Description

This project provides a RESTful API to interact with MongoDB data. It supports basic CRUD operations and can be extended for various use cases.

- Express for handling HTTP requests.
- MongoDB for database storage.
- Mongoose for modeling data and interacting with MongoDB.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (either locally or use MongoDB Atlas for a cloud solution)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/dhivya-426/tnpsc-learn-easy-backend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd tnpsc-learn-easy-backend
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file at the root of the project and add your MongoDB connection string. Example:

   ```env
   DB_URL=mongodb://localhost:27017/tnpsc-learn-easy
   PORT=5000
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The API will be running on [http://localhost:5000](http://localhost:5000).
