require("dotenv").config()
const app = require("./src/app");

app.listen(3000, function(){
    console.log("server is running on port http://localhost:3000")
});