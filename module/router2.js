/**
 * Created by wulinbo on 17/2/9.
 */
var optfile = require('./optfile');
module.exports = {
    login:function (req, res) {
        function recall(data) {
            res.write(data);
            res.end('');
        }
        optfile.readfile('./views/login.html',recall);
    },
    sign:function (req,res) {
        function recall(data) {
            res.write(data);
            res.end('');
        }
        optfile.readfile('./views/sign.html',recall);
    }
}