const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const homeStartingContent = "duong dep trai";
const aboutContent = "Keep going bro";
const contactContent = "04157054441";

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("home", {
        homeStartingContent: homeStartingContent,
    });
    
});


app.get('/about', (req, res) => {
    res.render("about", {
        aboutContent: aboutContent,
    });
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        contactContent: contactContent,
    });
});

app.get("/compose", (req, res) => {
    res.render("compose", {

    });
});























app.listen(3000, () => {
    console.log("server running on port 3000")
})


