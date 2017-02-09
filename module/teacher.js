/**
 * Created by wulinbo on 17/2/9.
 */
var user = require('./user');
function teacher(id,name,age) {
    user.apply(this,[id,name,age]);
    this.tenter = function (res) {
        res.write(this.name+'jiangke');
    }
}
module.exports = teacher;