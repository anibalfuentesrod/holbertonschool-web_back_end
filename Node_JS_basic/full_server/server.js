const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
