import express from "express"
import cors from "cors"

const server = express()
server.use(express.json())
server.use(cors())

let UserTwitter  = []
let AllTweets = []

server.post("/sign-up", (req, res) => {
let NewUser = req.body
console.log(req.body)
UserTwitter.push(NewUser)
console.log(UserTwitter)
res.send("OK")

})

server.post("/tweets", (req, res) => {
let {username, tweet} = req.body
let UserRegistrado = UserTwitter.find(user => user.username === username)
console.log(UserRegistrado)
if(!UserRegistrado){
    return res.send("UNAUTHORIZED")
}
AllTweets.push({username: username, tweet: tweet})
console.log(AllTweets)
return res.send("OK")
    

})

server.get("/tweets", (req, res)  => {
let Tweets10 = AllTweets.slice(-10)
let TweetAvatar = Tweets10.map(tweet => {
let UserSeek = UserTwitter.find(usertwitter => usertwitter.username === tweet.username)
return {username: tweet.username, avatar: UserSeek.avatar, tweet: tweet.tweet}
})
res.send(TweetAvatar)
})

server.listen(5000, () => {
    console.log('Tá ouvindo')
  })