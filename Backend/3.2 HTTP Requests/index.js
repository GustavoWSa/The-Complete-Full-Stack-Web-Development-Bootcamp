import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) =>{
    res.send("<h1>Home Page</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact me at: <bold>gustavo.wermelinger@gmail.com</bold></h1>");
});
app.get("/about", (req, res) =>{
    res.send("<h1>About me</h1>");
});
app.listen(port, ()=>{
    console.log(`Server iniatilized on port ${port}`);
});
