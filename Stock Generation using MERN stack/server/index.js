





const express=require('express');
const App=express();
const cors=require('cors');

App.use(cors());
App.use(express.json());


var Mongoclient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/dem";

/*Mongoclient.connect(url,function(err,db){
    if(err) throw err;
    console.log("Database created");
    db.close();

})


url="mongodb://localhost:27017/";
Mongoclient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbo=db.db("dem");
    dbo.createCollection("stock",function(err,res){
        if(err) throw err;
        console.log("Collection created");
        db.close();
    })
})*/



url="mongodb://localhost:27017/";

App.post('/api/stock',async (req,res)=>{
    var nse=Math.floor(Math.random()*100);
    var bse=Math.floor(Math.random()*100);
    console.log(nse,"  ",bse);
    Mongoclient.connect(url,function(err,db){
        if(err) throw err;
        var dbo=db.db("dem");
        dbo.collection("stock").insertOne({NSE:nse,BSE:bse},function(error,res){
            if(error) throw error;
            console.log("Inserted");
            db.close();
        })
        dbo.collection("stock").findOne({NSE:nse,BSE:bse},function(error,result)
        {
            if(error) throw error;
            console.log("Found");
            res.json({resu:result});
            db.close();
        })
    })
    

})

App.listen(1337,()=>{
    console.log("Server started at 1337");
})
