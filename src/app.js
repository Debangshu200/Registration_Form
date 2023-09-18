const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const empCollection = require('./model/model');

const temp_path = path.join(__dirname, '../templates/views');
require("./db/db");
app.set('view engine', 'hbs');
app.set('views', temp_path);

app.use(express.json());
app.use(express.urlencoded ({extended: false}));


app.get('/', (req, res) =>{
    res.render('index');
});

app.post('/empdata', async (req,res) => {
   try {
    const password = req.body.password.trim();
    const cpassword = req.body.cpassword.trim();

   if(password === cpassword) {
    const empData = new empCollection ({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
        cpassword : req.body.cpassword
    });

    const postData = await empData.save();
    res.status(201).render(index);

   }else {
    res.send ("password are not matching...")
   }
    } catch (error) {
    res.status(400).send(error);
    }
})

app.listen(port, () =>{
    console.log(`server is running at port no ${port}`);
})