...对象...
	1.对象中包含一系列属性，这些属性是无序的。每个属性都有一个'字符串'key和对应的value。
	2.对象创建:
		1.字面量
		2.new/原型链
		3.Object.create
			var obj = Object.create({x : 1});
			
			obj.x // 1
			typeof obj.toString // "function"
			obj.hasOwnProperty('x');// false

			var obj = Object.create(null);
			obj.toString // undefined
	3.属性操作:
		1.属性删除
			var person = {age : 28, title : 'fe'};
			delete person.age; // true
			delete person['title']; // true
			person.age; // undefined
			delete person.age; // true
			
			delete Object.prototype; // false,
			
			var descriptor = Object.getOwnPropertyDescriptor(Object, 'prototype');
			descriptor.configurable; // false,是否可配置
			
			//全局与局部变量不能被删除
			var globalVal = 1;
			delete globalVal; // false
			
			(function() {
			    var localVal = 1;
			    return delete localVal;
			}()); // false
			
			//函数声明
			function fd() {}
			delete fd; // false
			
			(function() {
			    function fd() {};
			    return delete fd;
			}()); // false

			//隐式变量可以删除(不推荐)
			ohNo = 1;
			window.ohNo; // 1
			delete ohNo; // true
		2.属性检测
			var cat = new Object;
			cat.legs = 4;
			cat.name = "Kitty";
			
			'legs' in cat; // true
			'abc' in cat; // false
			"toString" in cat; // true, inherited property!!!
			
			cat.hasOwnProperty('legs'); // true
			cat.hasOwnProperty('toString'); // false,原型链上才有
			
			cat.propertyIsEnumerable('legs'); // true 属性是否可枚举?
			cat.propertyIsEnumerable('toString'); // false
			
			Object.defineProperty(cat, 'price', {enumerable : false, value : 1000});
			cat.propertyIsEnumerable('price'); // false
			cat.hasOwnProperty('price'); // true
			
			
			if (cat && cat.legs) {
			    cat.legs *= 2;
			}
			
			
			if (cat.legs !== undefined) {
			    // only if cat.legs is not undefined
			}
		3.属性枚举
			var o = {x : 1, y : 2, z : 3};
			'toString' in o; // true
			o.propertyIsEnumerable('toString'); // false
			var key;
			for (key in o) {
			    console.log(key); // x, y, z
			}
			
			var obj = Object.create(o);
			obj.a = 4;
			var key;
			for (key in obj) {
			    console.log(key); // a, x, y, z
			}
			
			//不想遍历原型链上的属性
			var obj = Object.create(o);
			obj.a = 4;
			var key;
			for (key in obj) {
			    if (obj.hasOwnProperty(key)) {
			        console.log(key); // a
			    }
			}
	4.getter/setter方法 -->另一种读写属性的方式
		var man = {
		    weibo : '@Bosn',
		    $age : null,
		    get age() {
		        if (this.$age == undefined) {
		            return new Date().getFullYear() - 1988;
		        } else {
		            return this.$age;
		        }
		    },
		    set age(val) {
		        val = +val;
		        if (!isNaN(val) && val > 0 && val < 150) {
		            this.$age = +val;
		        } else {
		            throw new Error('Incorrect val = ' + val);
		        }
		    }
		}
		
		console.log(man.age); // 27
		man.age = 100;
		console.log(man.age); // 100;
		man.age = 'abc'; // error:Incorrect val = NaN
		
		.get/set与原型链
			function foo() {}
			Object.defineProperty(foo.prototype, 'z', {get : function(){return 1;}});
			var obj = new foo();
			obj.z; // 1
			obj.z = 10;
			obj.z; // still 1
			Object.defineProperty(obj, 'z', {value : 100, configurable: true});
			obj.z; // 100;
			delete obj.z;
			obj.z; // back to 1
			
			var o = {};
			Object.defineProperty(o, 'x', {value : 1}); // writable=false, configurable=false
			var obj = Object.create(o);
			obj.x; // 1
			obj.x = 200;
			obj.x; // still 1, can't change it
			
			Object.defineProperty(obj, 'x', {writable:true, configurable:true, value : 100});
			obj.x; // 100
			obj.x = 500;
			obj.x; // 500
	5.属性标签 --> 属性级的权限设置
		Object.getOwnPropertyDescriptor({pro : true}, 'pro');
		// Object {value: true, writable: true, enumerable: true, configurable: true}
		Object.getOwnPropertyDescriptor({pro : true}, 'a'); // undefined
		
		var person = {};
		Object.defineProperty(person, 'name', {
		    configurable : false, //这些属性是否可以暂被修改,是否可以被delete
		    writable : false,     //是否可修改/可写
		    enumerable : true,	  //是否可遍历/枚举,影响for/in循环中是否会出现
		    value : "Bosn Ma"	 
		});
		
		person.name; // Bosn Ma
		person.name = 1;
		person.name; // still Bosn Ma
		delete person.name; // false
		/*********************************************************************************************************/
		Object.keys(person); // ["name"] -->能输出所有可枚举的key
		
		Object.defineProperties(person, {
		    title : {value : 'fe', enumerable : true},
		    corp : {value : 'BABA', enumerable : true},
		    salary : {value : 50000, enumerable : true, writable : true},
		    luck : {
		        get : function() {
		        return Math.random() > 0.5 ? 'good' : 'bad';
		        }
		    },
		    promote : {
		        set : function (level) {
		            this.salary *= 1 + level * 0.1;
		        }
		    }
		});
		
		Object.getOwnPropertyDescriptor(person, 'salary');
		// Object {value: 50000, writable: true, enumerable: true, configurable: false}
		Object.getOwnPropertyDescriptor(person, 'corp');
		// Object {value: "BABA", writable: false, enumerable: true, configurable: false}
		person.salary; // 50000
		person.promote = 2;
		person.salary; // 60000
	6.对象标签
		[[proto]]
		[[class]]
		[[extensible]]
		
		//class
		var toString = Object.prototype.toString;
		function getType(o){return toString.call(o).slice(8,-1);};
		
		toString.call(null); // "[object Null]"
		getType(null); // "Null"  参数-->对象
		getType(undefined); // "Undefined"
		getType(1); // "Number"
		getType(new Number(1)); // "Number"
		typeof new Number(1); // "object"
		getType(true); // "Boolean"
		getType(new Boolean(true)); // "Boolean"
		
		//extensible标签
		var obj = {x : 1, y : 2};
		Object.isExtensible(obj); // true
		Object.preventExtensions(obj);
		Object.isExtensible(obj); // false
		obj.z = 1;
		obj.z; // undefined, add new property failed
		Object.getOwnPropertyDescriptor(obj, 'x');
		// Object {value: 1, writable: true, enumerable: true, configurable: true}
		
		Object.seal(obj);
		Object.getOwnPropertyDescriptor(obj, 'x');
		// Object {value: 1, writable: true, enumerable: true, configurable: false}
		Object.isSealed(obj); // true
		
		Object.freeze(obj);
		Object.getOwnPropertyDescriptor(obj, 'x');
		// Object {value: 1, writable: false, enumerable: true, configurable: false}
		Object.isFrozen(obj); // true
		
		// [caution] not affects prototype chain!!!
	7.序列化、其它对象方法
		1.序列化	
			var obj = {x : 1, y : true, z : [1, 2, 3], nullVal : null};
			JSON.stringify(obj); // "{"x":1,"y":true,"z":[1,2,3],"nullVal":null}"
			
			obj = {val : undefined, a : NaN, b : Infinity, c : new Date()};
			JSON.stringify(obj); // "{"a":null,"b":null,"c":"2015-01-20T14:15:43.910Z"}"
			
			obj = JSON.parse('{"x" : 1}');
			obj.x; // 1