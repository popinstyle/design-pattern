//篮球类
var Basketball = function(){
    this.intro = 'basketball is wonderful';
}
Basketball.prototype = {
    getAmount : function(){
        console.log("5个");
    },
    getName:function(){
        console.log("篮球");
    }
}

//足球类
var Football = function(){
    this.intro = 'football is wonderful';
}
Football.prototype = {
    getAmount : function(){
        console.log("101个");
    },
    getName:function(){
        console.log("足球");
    }
}

//排球类
var Volleyball = function(){
    this.intro = 'volleyball is wonderful';
}
Volleyball.prototype = {
    getAmount : function(){
        console.log("81个");
    },
    getName:function(){
        console.log("排球");
    }
}

//工厂函数
var Sportfactory = function(name){
    switch(name){
        case 'CBA':
            return new Basketball();
        case 'WordCup':
            return new Football();
        case 'VB':
            return new Volleyball();
    }
}
var footnall =  Sportfactory('VB');
// footnall.getName();
// console.log(footnall.intro);


//工厂模式(寄生式方法)
function createPop(type,text){
    var o = new Object();
    o.content = 'text';
    o.show = function(){}
    if(type == "alert"){
        alert(text);
    }
    if(type == "prompt"){

    }
    if(type == "confirm"){

    }
    //将对象返回
    return o;
}
//创建对象
var userNameAlert = createPop("alert","用户名为26个以内");