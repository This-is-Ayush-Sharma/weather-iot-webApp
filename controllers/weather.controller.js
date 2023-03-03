
exports.showPage = (req,res)=>{
    return res.render('weather');
}

exports.SensorDatahandler = (req,res)=>{
    data = req.params;
    data.time = new Date().toLocaleString("en-US", "Asia/Delhi");
    console.log(data);
    return res.send("1"); 
}