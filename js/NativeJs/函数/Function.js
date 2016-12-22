...函数...
	1.创建函数: 函数声明  函数表达式  Function构造器
	2.调用函数: 直接调用 --> foo()   对象方法 -->o.foo() 
				构造器 -->new Foo()   call/apply/bind --> func.call(o)
	3.this
		1.全局的this(浏览器)
		2.一般函数的this(浏览器)
		3.作为对象方法的函数的this
			var o = { 
				  prop: 37, 
				  f: function()  { 
				    return this.prop; 
				  } 
				}; 
				console.log(o.f());  //  logs  37
		4.对象原型链上的this
			var o = {f:function(){ return this.a + this.b; }}; 
			var p = Object.create(o); 
			p.a = 1; 
			p.b = 4; 
			console.log(p.f());  //  5
		5.get/set方法与this
		6.构造器中的this
			function  MyClass(){ this.a  =  37; }  
			var o = new MyClass();  console.log(o.a);  //  37,如果没有返回值,默认返回this(一个指向构造器的prototype属性的空对象)  
			
			function  C2(){ this.a  =  37;  return {a : 38};  }  
			o = new C2();  console.log(o.a);  //  38  
		7.call/apply方法与this
			function add(c, d){   return this.a + this.b + c + d;  } 
			var o = {a:1, b:3}; 
			add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16 
			add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34 
			function bar() {   console.log(Object.prototype.toString.call(this));  } 
			bar.call(7); // "[object Number]"
		8.bind方法与this(ie9+) 
			function f(){ return this.a;} 
			var g = f.bind({a : "test"});  console.log(g()); // test 
			var o = {a : 37, f : f, g : g};  console.log(o.f(), o.g()); // 37, test	
	4.函数属性 &arguments	
		1.函数属性 &arguments
			function foo(x, y, z) { 
				‘use strict’;
			    arguments.length; // 2     
			    arguments[0]; // 1    
			    arguments[0] = 10;     x; // 
			    change to 10;		//严格模式下仍然是1
			    arguments[2] = 100;     z; // still undefined !!!     
			    arguments.callee === foo; // true  
			}
			foo(1, 2);  
			foo.length; // 3
			foo.name; // "foo"
		2.apply/call方法(浏览器)
			function foo(x, y) { console.log(x, y, this); } 
			foo.call(100, 1, 2); // 1, 2, Number(100)  
			foo.apply(true, [3, 4]); // 3, 4, Boolean(true)  
			foo.apply(null); // undefined, undefined, window  
			foo.apply(undefined); // undefined, undefined, window
			
			function foo(x, y) {  'use strict';  console.log(x, y, this); } 
			foo.apply(null); // undefined, undefined, null 
			foo.apply(undefined); // undefined, undefined, undefined