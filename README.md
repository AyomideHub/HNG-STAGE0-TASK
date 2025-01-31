# HNG-STAGE0-TASK (Node.js) - Description

### A API endpoint for HNG Stage zero task to develop a public API that returns the following information in JSON format:
Your registered email address (used to register on the HNG12 Slack workspace).
The current datetime as an ISO 8601 formatted timestamp.
The GitHub URL of the project's codebase

## Documentation

**Base URL**: ``

### Main Endpoint
GET /
```json
Response:
{
  "email": "dadaayomide64@gmail.com",
  "current_datetime": "2025-01-31T11:32:17.101Z",
  "github_url": "https://github.com/AyomideHub/HNG-STAGE0-TASK.git"
},


## Local Dev - Setup instructions

### 1. Clone repo - On Terminal(Bash):
git clone https://github.com/AyomideHub/HNG-STAGE0-TASK.git
cd repo

### 2. Install dependencies/modules:
npm install

### 3. Start dev server:
npm run dev
