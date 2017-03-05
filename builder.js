var Human = function(param){
    this.skill = param && param.skill || '保密';
    this.hobby = param && param.hobby || '保密';
}
Human.prototype = {
    getSkill:function(){
        return this.skill;
    },
    getHobby:function(){
        return this.hobby;
    }
}

//实例化姓名类
var Named = function(name){
    var that = this;
    //构造器
    (function(name,that){
        that.wholeName = name;
    })(name,that);
}

//实例化职位类
var Work = function(work){
    var that = this;
    //构造器
    (function(work,that){
        switch(work){
            case 'code':
                that.work = '代码';
                that.description = "迷醉于代码";
                break;
            case 'UI':
                that.work = '设计师';
                that.description = "设计是一种艺术";
                break;
            case 'teach':
                that.work = '教师';
                that.description = "教师很好";
                break;
            default:
                that.work = work;
                that.description = "抱歉，我们尚未清楚你所选择的职位";
        }
    })(work,that);
}
Work.prototype.changeWork = function(work){
    this.work = work;
}
Work.prototype.changeDescription = function(des){
    this.description = des;
}


/****
 *  应聘者构造者
 *  参数 name : 姓名
 *  参数 work : 期望职位
 **/
var Person = function(name,work){
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}

var person = new Person("Charlie","UI");
console.log(person);
console.log(person.name);
console.log(person.work.work);
person.work.changeDescription("请更改描述");