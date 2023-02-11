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
function ListCreate(data) {
    return(
        <>
            <ul>
                {data.map(elem => <li><p>{elem.name}</p></li>)}
            </ul>
        </>
    )
}
console.log(ListCreate());
http.createServer(function(req,res){
    const {pathname, query} = url.parse(req.url, true)
    if(pathname=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(Home)
    }
    if(pathname=='/cars'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(Cars)
    }
    if(pathname=='/fruit'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(Fruit)
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(Npot)
    }
}).listen(3300)