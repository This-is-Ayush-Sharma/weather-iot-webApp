const app = require('express')();
const http = require('http').Server(app);
const socket = require('socket.io')(http);
const cors = require('cors');
const routes = require('./routes/routes');

app.set('view engine','ejs');

app.use(require('express').json());
app.use(cors())
app.use('/',routes);

global.data = {};

socket.on('connection',(soc)=>{
    console.log(soc.id);
    soc.on('send-data', ()=>{
        setInterval(() => {
            soc.emit('make-update', data);
        }, 300);
    })
})

http.listen(5000, ()=> console.log("The server is live at port 5000"));