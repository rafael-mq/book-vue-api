const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const {db} = require('./data/database');

dotenv.config();

const port = process.env.PORT ? process.env.PORT: 8090; 
const app = express();

const startup = async () => {
  console.log('Starting application');
  
  try {
    console.log('initializing database...');
    await db.initialize();
    
  } catch (e) {
    console.error(e);    
  }
};
startup();

app.set('name', 'Book Vue API');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('api ok!'))
app.use('/api', routes);

app.listen(port, () => console.log(`${app.get('name')} listening on port ${port}`))