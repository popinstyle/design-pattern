var Factory = function(type,content){
    if(this instanceof Factory){
        var s = new this[type](content);
        return s;
    }else{
        return new Factory(type,content);
    }
}

Factory.prototype = {
    Java:function(content){
        this.content = content;
        (function(content){
            console.log(content);
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.border = "1px solid red";
            document.getElementById('container').appendChild(div);
        })(content)
    },
    JavaScript:function(content){
        this.content = content;
        (function(content){
            console.log(content);
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.border = "1px solid red";
            document.getElementById('container').appendChild(div);
        })(content)
    },
    UI:function(content){
        this.content = content;
        (function(content){
            console.log(content);
            var div = document.createElement("div");
            div.innerHTML = content;
            div.style.border = "1px solid red";
            document.getElementById('container').appendChild(div);
        })(content)
    }
}
var data = [
    {
        type:'JavaScript',
        content:'js'
    },
    {
        type:'Java',
        content:'java'
    },
    {
        type:'UI',
        content:'UI'
    },
    {
        type:'php',
        content:'php'
    }
]

for(var i = 2;i>=0;i--){
    Factory(data[i].type,data[i].content)
}