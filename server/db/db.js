const mongoose = require("mongoose");

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected...")
}).catch((err)=>{
    console.log(err)
})