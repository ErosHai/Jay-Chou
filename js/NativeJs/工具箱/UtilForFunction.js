//封装ajax方法
function postData(url, data, callback, waitingDialog) {     
    mui.ajax(url,{  
        data:'data='+JSON.stringify(data),  
        dataType:'json',  
        type:'post',    
        timeout:60000,  
        success:callback,  
        error:function(xhr,type,errorThrown){  
            waitingDialog.close();  
            mui.alert("<网络连接失败，请重新尝试一下>", "错误", "OK", null);  
        }  
    });  
}

//调用封装好的ajax方法
postData(url, //服务端的URL  
	data,// json 数据
    function(data) {  
      wd.close(); // 调用成功，先关闭等待的对话框  
    },  
    wd//传递给postData的最后一个参数，失败的时候关闭等待对话框  
  );  
  
//日期格式化 (xxxx-xx-xx)
function formatDateA(date) {   
   var str = date;  
   return str.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
}
//精确日期格式化 (xxxx-xx-xx)
function formatDateB(date) {   
   var str = date;  
   return str.replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, "$1-$2-$3 $4:$5:$6");
}
//时间格式化 (xx:xx:xx)
function formatTime(time){
	var str = time;  
   return str.replace(/^(\d{2})(\d{2})(\d{2})$/, "$1:$2:$3");
}
//日期格式化 (xxxx-xx)
function formatDate(date) {   
   var str = date;  
   return str.replace(/(.{4})/g,'$1-');   
}
function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;  
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
    t = "";  
    for (i = 0; i < l.length; i++) {  
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
    }   
    return t.split("").reverse().join("") + "." + r;   
}
function lastMoney(money){ 
 	var m=money;
 	var mArr=m.split(".");
 	return mArr;
}
function stayFourChangeStar(num){
 	var n=num.substring(0,num.length-4).replace(/\w/g, '*') + num.substring(num.length-4);   
	return n; 
}
function fourNumAndStarWithAir(num){
	var n=num.substring(0,num.length-4).replace(/\w/g, '*') + num.substring(num.length-4);
 	return n.substring(n.length-8).replace(/\s/g, '').replace(/(.{4})/g, "$1 "); 
}
function stayFourAllStar(num){
	var n=num.substring(0,num.length-4).replace(/\w/g, '*') + num.substring(num.length-4);
	return (n.replace(/s/g, '').replace(/(.{4})/g, "$1 ")); 
}
function twoSmallNum(a) {
            var b = a.indexOf('.');
            var c = '';
            if (b >= 0) {
                var d = a.split('.');
                if (d[1].length < 0) {
                    c = d[0] + '.0';
                } else if (d[1].length > 0 && d[1].length <= 2) {
                    c = d[0] + '.' + d[1].substr(0, d[1].length);
                } else {
                    c = d[0] + '.' + d[1].substr(0, 2);
                }
            } else {
                c = a;
            }
            return parseFloat(c);
}
function formatAmount(obj){
	var event = window.event || obj.event;
	if (event.keyCode == 37 | event.keyCode == 39) {
		return;
	}
	//先把非数字的都替换掉，除了数字和.   只允许一个小数点
	obj.value = obj.value.replace(/[^\d.]/g, "").replace(/^\./g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
}
//调用数组方法操纵字符串
var s = 'JavaScript';
Array.prototype.join.call(s,' ');

Array.prototype.filter.call(s,function(x){
	return x.match(/[^aeiou]/);
}).join('')
				