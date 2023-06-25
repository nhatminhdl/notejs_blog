import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';
// import { connect } from 'http2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

//connect to db

db.connect();

// config static file
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
//Http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

//router
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
