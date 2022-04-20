const menu = require('./models/menu');

const express = require('express');
const methodOverride = require('method-override');
const app = express();
app.set('view engine', 'ejs');
const PORT = 4000;

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'))

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

//Delete/Destroy Route ---->

app.delete('menu/:id', (req, res) =>{
    const id = req.params.id
    menu.splice(id, 1);
    res.redirect('/menu');
});

// Post a new Input ----->

app.post('/menu', (req, res) =>{
    //let newItem = req.body
    menu.unshift(req.body);
    res.redirect('/menu');
});

//Update Route ----->

app.put('/menu/:id', (req,res) =>{
    menu[req.params.id] = req.body
    res.redirect(`/menu/${req.params.id}`); 
});

// Edit Route ----->
app.get('/menu/:id/edit', (req,res) =>{
    const menuUpdate = menu[req.params.id]
    const context = {
        menu: menuUpdate,
        id: req.params.id
    }
    res.render('edit.ejs', context);
});

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