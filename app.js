//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "";
const aboutContent = "";
const contactContent = "";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// ADD your Username and Password for mongoDB Atlas then
mongoose.connect("mongodb+srv://admin-"+process.env.DB_NAME + ":" + process.env.DB_PASS + "abhi@cluster0.4ady3.mongodb.net/DonatelyDB?retryWrites=true&w=majority", {useNewUrlParser: true});



const contactSchema = {
  name: String,
  email: String,
  reason: String,
  detail: String
};

const Contact = mongoose.model("Contact", contactSchema);


app.get("/",function(req,res){
  res.render("./home/index.ejs");
});

app.get("/home", function(req, res){

  Post.find({}, function(err, posts){
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
      });
  });
});



app.get("/compose", function(req, res){
  res.render("compose");
});


app.get("/contact", function(req, res){
  res.render("contact" ,{
    responseHead: "Failure",
    responseBody: "Please try again" 
  });
});

app.post("/compose", function(req, res){

  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
    type: req.body.postType,
    img: req.body.postImg
  });


  post.save(function(err){
    if(!err){
      res.redirect("/compose");
    }
    
  });
});

app.post("/contact", function(req, res){

  const contact = new Contact({
    name: req.body.contactName,
    email: req.body.contactEmail,
    reason: req.body.contactReason,
    detail: req.body.ContactBody
  });

  contact.save(function(err){
    if (!err){
      res.render("contact" ,{
      responseHead: "Sucess",
      responseBody: "we will revert back to you within 7 working days" 
    });
  }
  else{
    res.render("contact" ,{
      responseHead: "Failure",
      responseBody: "Please try again" 
    });
  }
  });
});


app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port 3000");
});



