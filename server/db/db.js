const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ask0111:Hariom!123@cluster0.bj8je1v.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected...")
}).catch((err)=>{
    console.log(err)
});


