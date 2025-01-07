const express =  require('express');
const router = express.Router();
const Category = require('./Categorie.js');
const slugify = require('slugify')

router.get('/admin/categories/new', (req, res) => {
  res.render('admin/categories/new');
});

router.post('/categories/save', (req, res) => {
  let title = req.body.title;
  console.log('Pegou o titulo do form');
  if(title != undefined){
    console.log('Entrou no if');
    Category.create({
      title: title,
      slug: slugify(title, { lower: true })
    }).then(() => {
      res.redirect('/')
    })
  }else{
    res.redirect('/admin/categories/new')
  }
});

module.exports = router;
