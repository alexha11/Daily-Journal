const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const _ = require('lodash')

const homeStartingContent = "duong dep trai";
const aboutContent = "Keep going bro";
const contactContent = "04157054441";

const app = express();
var posts = []

app.set('view engine', 'ejs');
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("home", {
        homeStartingContent: homeStartingContent,
        posts: posts
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

app.post("/compose", (req, res) => {
    var post = {
        title: req.body.titleCompose,
        body: req.body.bodyCompose
    }
    res.redirect("/");
    posts.push(post);
});

app.get("/posts/:topic", (req, res) => {
    //console.log(req.params.topic);
    const requestedTitle = _.lowerCase(req.params.topic);
    // for(let i = 0; i < posts.length; i++) {
    //     var storedTitle = posts[i].title;
    //     console.log(storedTitle + " ")
    //     if(requestedTitle === posts[i].title) {
    //         console.log("yeah, thats right man");
    //     }
    // }
    posts.forEach(post => {
        const storedTitle = post.title;
        if(_.lowerCase(storedTitle) === requestedTitle) {
            res.render("post", {
                title: post.title,
                content: post.body
            });
        }
    })
})
















app.listen(3000, () => {
    console.log("server running on port 3000")
})


