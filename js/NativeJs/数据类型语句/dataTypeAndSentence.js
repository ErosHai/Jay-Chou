...6种基本数据类...
 原始类型：number,string,boolean,null,undefine + object(Function,Array,Date...)
 隐式转换：num + 0 = num , num + '' = string .
 = == ===: ===首先判断类型. ==类型不同,尝试类型转换和比较.
 包装对象：给原始类型赋值时会自动转换为包装对象,但是用完后就销毁了，并不能取到赋值。
 类型检测: 1.typeof:返回一个字符串(null-->object因为历史原因),判断基本类型和函数对象.
          2.obj instanceof Object(左边这个对象的原型链上是否有右边这个构造函数的prototype属性):基于原型链进行判断.
          	不同window或iframe间的对象类型检测不能使用instanceof！---> obj._proto_ === Function.prototype.
          	检测对象是否继承prototype,只能检测继承关系，不能检测创建对象的构造函数.
          	aaa.prototype.isPrototypeOf(obj) --> 不使用构造函数检测对象的原型链上是否存在某个特定的对象.
          3.Object.prototype.toString.apply([]); === “[object Array]”;
            Object.prototype.toString.apply(function(){}); === “[object Function]”;
            Object.prototype.toString.apply(null); === “[object Null]”
            Object.prototype.toString.apply(undefined); === “[object Undefined]”
            IE6/7/8 Object.prototype.toString.apply(null) 返回”[object Object]”
          4.constructor
		  5.duck type  
		    typeof
			适合基本类型及function检测，遇到null失效。
			
			[[Class]]
			通过{}.toString拿到，适合内置对象和基元类型，遇到null和undefined失效(IE678等返回[object Object])。
			
			instanceof
			适合自定义对象，也可以用来检测原生对象，在不同iframe和window间检测时失效。
...语句,严格模式...
	1.switch语句
		switch ( xxx )
			{
			case "-98":
			        do();
				    break;
			default:
			        do();
			        break;
			}
	2.for/in -->会遍历出原型链上的属性,顺序也不确定
		var obj = { a: 'a', b: 'b' }
		var i;
		for(i in obj){
			console.log(obj[i]);
		}
	3.try/catch/finally
		aaa(1);
		function aaa(a){
			try{
				if(a > 0){
					throw new Error('hahaha');
				}
			}
			catch (ex) {
				alert(ex);
			}
			finally{
				alert(123);
			}
		}