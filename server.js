const express = require ('express') ();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'src','img')))
// app.use(express.static(path.join(__dirname, 'src','js')))

// app.get('/', (req, res)=>{
//     let indexPath = path.resolve(__dirname,'src', 'index.html');
//     res.sendFile(indexPath)
// })

// app.get('/bio', (req, res)=>{
//     let bio = path.resolve(__dirname,'src', 'bio.html');
//     res.sendFile(bio)
// })




app.post ('/', (req, res)=>{
    console.log(req.body) 
    res.send('successful')
    
})

app.listen(PORT)



console.log('app is runing on port:' + PORT )