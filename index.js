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
const Npot = fs.readFileSync('./index.html', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})
const datElm = fs.readFileSync('../db.json', 'utf-8', (err,data) => {
    if(err) throw err
    return data
})

const ListElem = require('./function.js')
const a= JSON.parse(datElm)

http.createServer(function(req,res){
    const {pathname, query} = url.parse(req.url, true)
    if(pathname=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(Home)
    }
    if(pathname=='/cars'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(ListElem(a.cars))
        res.end(Cars)
    }
    if(pathname=='/fruit'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(ListElem(a.Fruit))
        res.end(Fruit)
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(Npot)
    }
}).listen(3300)