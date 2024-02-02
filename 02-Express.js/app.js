const http = require('http');
const fs = require('fs');

// get all the files
const homePage = fs.readFileSync('./navbar-app/index.html')
const homeStyles = fs.readFileSync('./navbar-app/styles.css')
const homeImage = fs.readFileSync('./navbar-app/logo.svg')
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js')


// this method will invoked everytime user hits the server
const server = http.createServer((req, res) => {
    // console.log(req.method);
    const url = req.url;

    // home page
    if(url === '/'){
        // send HTTP response header to the client
        res.writeHead(200, {'content-type': 'text/html'})
    
        // send HTTP response body to the client
        res.write(homePage);
    
        // Signals client response has send successfuly. 
        // Ends the request-response cycle
        res.end();
    }else if(url === '/about'){
        // about page
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>This is about page</h1>')
        res.end()
    }else if(url === '/styles.css'){
        // about page
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }else if(url === '/logo.svg'){
        // about page
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }else if(url === '/browser-app.js'){
        // about page
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }else {
        // 404: 
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h1>Error 404: Resource not found</h1>");
        res.end();
    }

    

})


const port = 3000;
server.listen(port, (err) =>{
    if(err){
        console.log(err.message);
        process.exit(1);
    }
    console.log(`server is listening on ${port}`);
})  