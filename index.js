const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const config = require('./config/key.js')

//application/x-ww/form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))
//application/json
app.use(bodyParser.json())

const { User } = require('./models/User')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected..'))
    .catch(err=>console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!!')
})

//회원가입을 위한 라우터 만들기
app.post('/register',(req,res) => {

  //회원 가입할때 필요한 정보들을 Client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)
  user.save((err,userInfo)=>{
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})