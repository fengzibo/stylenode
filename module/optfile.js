/**
 * Created by wulinbo on 17/2/9.
 */
var fs = require('fs');
module.exports = {
    readfile:function (path,recall) {
        fs.readFile(path,function (err, data) {
            if(err){
                console.log(err);
            }else {
                console.log(data.toString());
                recall(data);
            }
        })
    },
    readfileSyn:function (path) {
        var data = fs.readFileSync(path,'utf-8');
        console.log("同步方法执行完毕");
        console.log(data);
    }
}