
exports.showPage = (req,res)=>{
    return res.render('weather');
}

exports.SensorDatahandler = (req,res)=>{
    const { temprature,humidity } = req.params;
    
}