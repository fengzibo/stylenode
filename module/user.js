/**
 * Created by wulinbo on 17/2/8.
 */
function user(id,name,age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log(this.name+"进入");
    };
}
module.exports = user;