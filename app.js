const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello CI/CD7 with deploy 4!'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on http://localhost:${port}`));
