
//Server 1

const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Server 1 is running on port ' + PORT);
});

app.listen(PORT, () => {
  console.log('Server 1 started on port ' + PORT);
});

//Server 2

const express = require('express');
const app2 = express();
const PORT = 3001;

app2.get('/', (req, res) => {
  res.send('Server 2 is running on port ' + PORT);
});

app2.listen(PORT, () => {
  console.log('Server 2 started on port ' + PORT);
});

