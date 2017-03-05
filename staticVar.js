/**
 * Javascript 是没有静态变量static的
 *
 */
var Con = (function(){
    //私有变量
    var con = {
        MAX_NUM : 100,
        MIN_NUM : 1,
        COUNT : 1000
    };
    //返回取值器
    return {
        get : function(name){
            console.log(con[name]);
            return con[name] ? con[name] : null
        }
    }
})();

var count = Con.get("MIN_NUM");