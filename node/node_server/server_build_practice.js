//the createServer is hit everytime a request is sent
//the request and response are provided to us
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  var url = request.url;

function route(file){
        fs.readFile(file, 'utf8', 
         function (err, data) {
            if (err) throw err;
            response.write(data)
            response.end();
        });
}


   if(url == '/'){
        route('./index.html')
   }else if(url == '/ninjas'){
        route('./ninjas.html')
   }else if(url == '/dojos/new'){
       route('./dojos.html')
   }else{
       route('./error.html')
   }
//     response.writeHead(302, {
//     Location: 'http://www.google.com'
//         });
//     response.end()
//    }

});

server.listen(8000);


