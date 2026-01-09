import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Route from './routes/route.js';

const app = express();

app.use(cors()); // for avoiding the CORS type of error
app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }));

Connection();
app.use('/',Route);

const PORT = 8000;
app.listen(PORT , () => {
  console.log(`The surver running at http://localhost:${PORT}`);
});
