const express = require("express");
const databaseConnect = require("./Database");
const cors = require("cors");
const { productRouter } = require("./Route/product");

const app = express();

app.use(express.json());
app.use(cors());


app.use(logger)
function logger(req,res,next){
    console.log(new Date() , req.method)

    next()
}

app.use(productRouter);
databaseConnect().then(() => {
  app.listen("3000", () => {
    console.log("connected");
  });
});
