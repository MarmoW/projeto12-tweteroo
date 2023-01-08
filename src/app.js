import express from "express"
import cors from "cors"

const server = express()
server.use(express.json())
server.use(cors())

let UserTwitter  =  []
let AllTweets = []

server.post("/sign-up", (req, res) => {
let NewUser = req.body
console.log(req.body)
UserTwitter.push(NewUser)
res.send("OK")
console.log(UserTwitter)
})

server.post("/tweets", (req, res) => {
let UserRegistrado = UserTwitter.includes(req.data)
if(UserRegistrado){
    AllTweets.push(req.data)
    res.send("OK")
}
else{
    res.send("UNAUTHORIZED")
}
})

server.get("/tweets", (req, res)  => {
const Tweets10 = AllTweets.slice(-10)
res.send(Tweets10)


})

server.listen(5000, () => {
    console.log('Tá ouvindo')
  })