const menu = require('./models/menu');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const PORT = 4000;
app.use(express.urlencoded({extended: false}));



// =====================
//    ROUTES
// =====================

//home/index Route----->

app.get('/menu', (req,res)=> {
    const context = {menu: menu}
    res.render('index.ejs', context);
})

//New Item Route---->

app.get('/menu/new', (req,res) =>{
    res.render('new.ejs');
})


// Post a new Input ----->

app.post('/menu', (req, res) =>{
    let newItem = req.body
    menu.unshift(req.body);
    res.redirect('/menu');
})

//Show Route ----->

app.get('/menu/:id', (req,res) =>{
    let menuId = req.params.id
    const context ={
        menuItem: menu[menuId]
    }
    res.render('show.ejs', context);
});










app.listen(PORT, ()=>
    console.log(`listening on ${PORT}`)
);