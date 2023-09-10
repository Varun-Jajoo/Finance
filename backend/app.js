const express=require("express")
const col=require("./mongo")
const cors =require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',cors(),(req,res)=>{

})
app.post('/', async (req, res) => {
    try {
      const { level } = req.body;
      const data = {
        level: level, // Use 'text' instead of 'msg'
      };
  
      const collection = require("./mongo").collection;
       // Import the collection
      await collection.insertMany([data]);
     
     
    } catch (error) {
      console.error(error);
      res.json( "Internal server error" );
    }
  });
app.listen(8000,()=>{
    console.log("port connected")
})