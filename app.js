let express = require("express");
let app = express();

//Route template engine as ejs
app.set("view engine", "ejs");

//serving Static Files
app.use(express.static("public"));

//Middlware
const auth = require("./Middlware/auth");

//Route for '/'
app.get("/", (req, res) => {
  res.render("Home", { value: "Hello User !" });
});

//Route for '/services'  page
app.get("/services", auth, (req, res) => {
  res.render("Services");
});

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ....", PORT);
});
