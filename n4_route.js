/**
 * Created by wulinbo on 17/2/9.
 */
var  http  =  require('http');
var url = require('url');
var router = require('./module/router');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        router[pathname](request,response);
        response.end('');
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');