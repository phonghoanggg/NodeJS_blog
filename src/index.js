const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//Xử lý static file
app.use(express.static(path.join(__dirname, 'public')));

// Lưu dữ liệu từ phía form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourcess\\views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
