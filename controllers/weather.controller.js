
exports.showPage = (req,res)=>{
    return res.render('weather');
}

exports.SensorDatahandler = (req,res)=>{
    // const { temprature,humidity } = req.params;
    data = req.params;
    // console.log(`${temprature} ${humidity}`);
    console.log(data);
    return res.send("1"); 
}