//返回传入最大的参数，不定实参函数
function aaa(/* ... */){
				var max = Number.NEGATIVE_INFINITY;  //无穷小
				for(var i=0; i<arguments.length; i++){
					if(arguments[i] > max){
						 max= arguments[i];
					}
				}
				return max;
			}
alert(aaa(1,2,3));
//通过检测class属性判断是否为函数对象
function isFunction(a){
				return Object.prototype.toString.call(a) === '[object Function]';
			}
alert(isFunction(isFunction)); 