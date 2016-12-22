//ES3执行上下文
JS解释器如何找到我们定义的函数和变量？
变量对象(Variable Object,缩写为VO)是一个抽象概念中的“对象”，它用于存储执行上下文中的：
1.变量 
2.函数声明
3.函数参数
activeExecutionContext = { 
	VO : { 
	data_var, 
	data_func_declaration, 
	data_func_arguments 
	} 
}; 
--------------------------------------------------
var a = 10; 
function test(x) { 
    var b = 20; 
} 
test(30);
--------------------------------------------------
VO(globalContext) = { 
    a : 10, 
    test : <ref to function> 
}; 
VO(test functionContext) = { 
    x : 30, 
    b: 20 
};
--------------------------------------------------
全局执行上下文(浏览器)
VO(globalContext)  ===  [[global]]; 
[[global]]  =  { 
	Math : <...>, 
	String : <...>, 
	isNaN : function() {[Native  Code]} 
	... 
	... 
	window : global // applied  by  browser(host) 
};
---------------------------------------------------
函数中的激活对象
VO(functionContext) === AO; 
AO = { 
    arguments : <Arg0> 
}; 
arguments = { 
    callee, 
    length, 
    properties-indexes       
};  

1.变量初始化阶段
VO按照如下顺序填充: 
	1.函数参数  (若未传入，初始化该参数值为undefined) 
	2.函数声明  (若发生命名冲突，会覆盖) 
	3.变量声明  (初始化变量值为undefined，若发生命名冲突，会忽略。)
-->
	alert(x); // function             
	var x = 10; 
	alert(x);// 10              
	x = 20; 
	function x() {} 
	alert(x); // 20 
	if (true) { 
	    var a = 1; 
	} else { 
	    var b = true; 
	} 
	alert(a); // 1 
	alert(b); // undefined
---------------------------------------------------
//概念与继承
函数的protptype属性 1.重写+constructor
				   2.Fun.prototype.xxx 一个一个的加