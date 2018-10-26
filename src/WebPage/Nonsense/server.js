var http = require('http');  
var url = require('url');  
var fs = require('fs'); 
var exec = require('../Database/exec_query.js'); 
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("Go to /index.html");  
            response.end();  
            break;  
        case '/index.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data); 
                    //exec.exec_query(query1); 
                    response.end();  
                }  
            });  
            break;
    }  
});  
server.listen(8082);  