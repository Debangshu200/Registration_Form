const mongoose =require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/empform")
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // // useCreateIndex: false, //**  Remove this line  <-- this is old syntax
    // createIndexes: true,  // Add this line
.then(() => {
    console.log(`connection successful`);
})
.catch((error) => { 
    console.error(`Connection failed: ${error}`);
    
// .catch((e) => {
//     console.log(`no connection`);
})