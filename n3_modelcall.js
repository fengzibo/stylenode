/**
 * Created by wulinbo on 17/2/8.
 */
var  http  =  require('http');
var user = require("./module/user");
var teacher = require("./module/teacher");
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        user = new user(1,'zhangsan',20);
        user.enter();
        teacher = new teacher(1,'lisi',30);
        teacher.enter();
        teacher.tenter(response);
        response.end('');
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');