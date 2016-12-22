	/*1*/
	var request = new XMLHttpRequest();
	/*2*/
	request.open("POST", "server.php");
	/*3*/
	request.send(data);
	/*4*/
	request.onreadystatechange = function() {
		if (request.readyState===4) {		//响应完成
			if (request.status===200) { 	//请求成功
				document.getElementById("createResult").innerHTML = request.responseText;
			} else {
				alert("发生错误：" + request.status);
			}
		} 
	}