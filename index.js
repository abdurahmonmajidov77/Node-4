const http = require('http')
const url = require('url')
const fs = require('fs')

const Home = fs.readFileSync('./home.html', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})
const Cars = fs.readFileSync('./cars.html', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})
const Fruit = fs.readFileSync('./fruit.html', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})

http.createServer(function(req,res){
    const {pathname, query} = url.parse(req.url, true)

}).listen(3300)