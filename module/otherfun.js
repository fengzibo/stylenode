/**
 * Created by wulinbo on 17/2/8.
 */
/*function fun2(res){
    console.log("fun2");
    res.write("hello fun2")
}
module.exports = fun2;*/


module.exports={
    fun2:function (res) {
        console.log("fun2");
        res.write("hello fun2");
    },
    fun3:function(res){
        console.log("fun3");
        res.write("hello fun3");
    },
    fun4:function (res) {
        console.log("fun4");
        res.write("hello fun4");
    }
}