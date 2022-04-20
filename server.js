const menu = require('./models/menu');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const PORT = 4000;
let food;

// =====================
//    ROUTES
// =====================

//home/index Route----->

app.get('/menu', (req,res)=> {
    const context = {menu: menu}
    res.render('index.ejs', context);
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