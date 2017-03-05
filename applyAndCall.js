var Book = function(name,prize){
    this.name = name;
    this.prize = prize;
}

var Magazine = function(name,prize,copyright){
    Book.apply(this,arguments);
    console.log(this,arguments);
    this.copyright = copyright;
}
/**
 * 总结一下:
 * apply方法就是沿用调用的对象的属性和方法，让新的对象不用重新创建这些属性,与继承类似。
 * 其中,this表示调用的对象所拥有的的属性和方法
 * arguments表示继承后的对象所拥有的的方法和属性数组
 *
 * call方法和apply差不多
 * 只是当两个对象的参数顺序不一致的时候,call方法会解析成相同的参数顺序,指定参数列表对应值的位置
 */

var reader = new Magazine("读者",10,"云南日报");


