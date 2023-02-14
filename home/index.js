const http = require('http')
const url = require('url')
const fs = require('fs')
const ListElem = require('./function.js')

const Home = fs.readFileSync('./home.html', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})
const Data = fs.readFileSync('./back.json','utf-8', (err,data) => {
    if(err) throw err
    return data
})
const a= JSON.parse(Data)

http.createServer(function(req,res){
    const {pathname, query} = url.parse(req.url, true)
    if(pathname=='/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(ListElem(a))
        res.end(Home)
    }
}).listen(1001)