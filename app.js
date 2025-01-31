const express = require('express');
const cors = require('cors');
const { notFound } = require('./middlwares/notFound');

const app = express();

// CORS
app.use(cors());

// Main endpoint
app.get('/', (req, res) => {

  const responseObject = {
    email: "dadaayomide64@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/AyomideHub/HNG-STAGE0-TASK.git"
  };

  res.status(200).json({success: true, data: responseObject});
});


app.use(notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});