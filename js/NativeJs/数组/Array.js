...数组...
	1.常用的数组方法:
			1.Array.prototype.join --> 将数组转为字符串
				var arr = [1, 2, 3];
				arr.join(); // "1,2,3"
				arr.join("_"); // "1_2_3"
				
				/*通过数组方法实现字符串重复的方法*/
				
				function repeatString(str, n) {
				     return new Array(n + 1).join(str);
				}
				repeatString("a", 3); // "aaa"
				repeatString("Hi", 5); // "HiHiHiHiHi"			
			2.Array.prototype.reverse --> 将数组逆序
				var arr = [1, 2, 3];
				arr.reverse(); // [3, 2, 1]
				arr; // [3, 2, 1]	原数组被修改
				
			3.Array.prototype.sort --> 排序
				var arr = ["a", "d", "c", "b"];
				arr.sort(); // ["a", "b", "c", "d"]
				
				arr = [13, 24, 51, 3];
				arr.sort(); // [13, 24, 3, 51]
				arr; // [13, 24, 3, 51]	  原数组被修改

				arr.sort(function(a, b) {
				     return a - b;
				}); // [3, 13, 24, 51]

				arr = [{age : 25}, {age : 39}, {age : 99}];
				arr.sort(function(a, b) {
				     return a.age - b.age;
				});
				arr.forEach(function(item) {
				     console.log('age', item.age);
				});
				// result:
				// age 25
				// age 39
				// age 99
			4.Array.prototype.concat --> 数组合并
				var arr = [1, 2, 3];
				arr.concat(4, 5); // [1, 2, 3, 4, 5]
				arr; // [1, 2, 3]	原数组未被修改
				
				arr.concat([10, 11], 13); // [1, 2, 3, 10, 11, 13]
				
				arr.concat([1, [2, 3]]); // [1, 2, 3, 1, [2, 3]]
			5.Array.prototype.slice --> 返回部分数组
				var arr = [1, 2, 3, 4, 5];
				arr.slice(1, 3); // [2, 3]  原数组未被修改,左闭右开区间
				arr.slice(1); // [2, 3, 4, 5]
				arr.slice(1, -1); // [2, 3, 4]
				arr.slice(-4, -3); // [2]
			6.Array.prototype.splice -->数组拼接:指定的位置删除,删除个数,删除的位置可以拼接元素.
				var arr = [1, 2, 3, 4, 5];
				arr.splice(2); // returns [3, 4, 5]
				arr; // [1, 2];     原数组被修改
				
				arr = [1, 2, 3, 4, 5];
				arr.splice(2, 2); // returns [3, 4]
				arr; // [1, 2, 5];
				
				arr = [1, 2, 3, 4, 5];
				arr.splice(1, 1, 'a', 'b'); // returns [2]
				arr; // [1, "a", "b", 3, 4, 5]
			7.Array.prototype.forEach --> 遍历数组  IE9+
				var arr = [1, 2, 3, 4, 5];
				arr.forEach(function(x, index, a){
				    console.log(x + '|' + index + '|' + (a === arr));
				});
				// 1|0|true
				// 2|1|true
				// 3|2|true
				// 4|3|true
				// 5|4|true
			8.Array.prototype.map --> 数组映射
				var arr = [1, 2, 3];
				arr.map(function(x) {
				     return x + 10;
				}); // [11, 12, 13]
				arr; // [1, 2, 3]	原数组未被修改
			9.Array.prototype.filter --> 数组过滤
				var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				arr.filter(function(x, index) {
				     return index % 3 === 0 || x >= 8;
				}); // returns [1, 4, 7, 8, 9, 10]
				arr; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	原数组未被修改
			10.Array.prototype.every & some --> 数组判断
				ar arr = [1, 2, 3, 4, 5];
				arr.every(function(x) {		-->数组中每一个都要符合条件,每一个
				     return x < 10;
				}); // true
				
				arr.every(function(x) {
				     return x < 3;
				}); // false

				var arr = [1, 2, 3, 4, 5];	-->数组中任意一个符合条件,存在
				arr.some(function(x) {
				     return x === 3;
				}); // true
				
				arr.some(function(x) {
				     return x === 100;
				}); // false

			11.Array.prototype.reduce&reduceRight
				var arr = [1, 2, 3];
				var sum = arr.reduce(function(x, y) {
				     return x + y
				}, 0); // 6
				arr; //[1, 2, 3]    原数组未被修改
				
				arr = [3, 9, 6];
				var max = arr.reduce(function(x, y) {
				     console.log(x + "|" + y);
				     return x > y ? x : y;
				});
				// 3|9
				// 9|6
				max; // 9
				
				max = arr.reduceRight(function(x, y) {
				     console.log(x + "|" + y);
				     return x > y ? x : y;
				});
				// 6|9
				// 9|3
				max; // 9
				
			12.Array.prototype.indexOf&lastIndexOf-->数组检索
				var arr = [1, 2, 3, 2, 1];
				arr.indexOf(2); // 1
				arr.indexOf(99); // -1
				arr.indexOf(1, 1); // 4(元素,位置)
				arr.indexOf(1, -3); // 4
				arr.indexOf(2, -1); // -1
				arr.lastIndexOf(2); // 3
				arr.lastIndexOf(2, -2); // 3
				arr.lastIndexOf(2, -3); // 1
			13.Array.isArray --> 判断是否为数组				
				Array.isArray([]); // true
	
				[] instanceof Array; // true
				({}).toString.apply([]) === '[object Array]'; // true
				[].constructor === Array; // true
	2.字符串和数组:	
			var str = "hello world";
			str.charAt(0); // "h"
			str[1]; // e
			
			Array.prototype.join.call(str, "_");
			// "h_e_l_l_o_ _w_o_r_l_d"