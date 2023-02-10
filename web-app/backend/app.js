const http = require('http')    /* Retrive the library http by using require() */
const fs = require('fs')        /* File system library */
const port = 3000

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }) /* OK code, and specify content type */
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')  /* Instead of text we should render a 404 error page */
        }
        else {
            res.write(data)
        }
        res.end()
    })
})

/* Initialize the server instance listening on the given port */
server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    }
    else {
        console.log('Server is listening on port ' + port)
    }
})
