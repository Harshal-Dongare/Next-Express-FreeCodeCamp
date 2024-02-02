const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(
        './content/bigFile.txt',
        {
            encoding: 'utf8',
        }
    )
    
    readStream.on('open', () =>{
        // send data in chunks
        readStream.pipe(res)
    })

    readStream.on('error', (err) =>{
        res.end(err)
    })


})

const port = 3000;

server.listen(port, (err) => {
    if(err){
        console.log(err.message)
    }
    console.log("Server is listening on port " + port);
})