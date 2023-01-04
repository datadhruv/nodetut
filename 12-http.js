const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url==='/'){
    res.end("Welcome to our first server")
}
else if(req.url==='/about'){
    res.end("this is our story")
}else{
    res.end(`<h1>Oops!</h1
    <p>We can't seem to find your query</p>
    <a href="/">bach home</a>`)
}
})
server.listen(5000)