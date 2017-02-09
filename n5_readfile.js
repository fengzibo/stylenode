/**
 * Created by wulinbo on 17/2/9.
 */
var  http  =  require('http');
var url = require('url');
var router = require('./module/router2');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        console.log('访问');
        //optfile.readfileSyn('./views/login.html');
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        console.log(pathname);
        router[pathname](request,response);
        //response.end('ok');//不写则没有http协议尾
        //console.log("主程序执行完毕")
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');