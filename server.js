const express = require('express');
const server = express();
const connection = require('./database/conn.js');

// Controllers
const categoriesController = require('./categories/CategoriesController.js');
const articlesController = require('./articles/ArticlesController.js');

// Models
const Article = require('./articles/Article.js');
const Category = require('./categories/Categorie.js');

const PORT = 8080;

server.set('view engine', 'ejs');
server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

connection
  .authenticate()
  .then(() => {
    console.log('Connection with database created successfully!');
  })
  .catch((error) => {
    console.log(error);
  })

server.use('/', categoriesController);
server.use('/', articlesController);

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

