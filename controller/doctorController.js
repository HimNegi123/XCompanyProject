const fs=require("fs");
const doctorFunction=function(req,res){
    const state=req.params.state;
    console.log(state);
    fs.readFile('./dataSet.json','utf-8',(err,data)=>{
        let arr=JSON.parse(data); 
const sendJson=arr.filter(element => {
    if(element.state.toLowerCase()==state.toLowerCase()){
        return true;
    }
    else return false;
});
if(sendJson.length==0) res.send({})
else res.send(sendJson);
    });
    
}
module.exports={doctorFunction};