/*********************增添/改变样式***************************************************/
	$(".skin").hover(function(){
        $(this).addClass("showSkinBox");
	},function(){
		$(this).removeClass("showSkinBox");
	});
// showSkinBox:.showSkinBox .要改变的样式
/*********************增添/改变样式***************************************************/
//导航鼠标经过效果
	$(".nav li").hover(function(){
		$(this).addClass("navHover").siblings().removeClass("navHover");
		$(this).addClass("showSub");
	},function(){
		$(this).removeClass("navHover");
		$(this).removeClass("showSub");
	});
/*********************隔行变色***************************************************/	
//表格隔行变色
	$(".data table tr:even").addClass("trBg");
/*********************radio选择显示隐藏内容***************************************************/
	$('.s2Filter').on('click','.radioIm',function(){
		if(!$(this).hasClass('current')){
			$(this).closest('.s2Filter').find('.current').removeClass('current'); //如果没选中，点击的话移除选中的按钮的颜色
			$(this).addClass('current');                                          //没选中的变色
			$(this).siblings('input[type = "radio"]').click();                    //兄弟节点点击事件
			if($(this).text() == "我的贷款"){                                        //如果选中第一个隐藏，选中第二个显示
				$(this).closest('.s2Filter').find('.idInputWrap').addClass('hide');
			}else{
				$(this).closest('.s2Filter').find('.idInputWrap').removeClass('hide');
			}
		}
	});
	
/*********************点击增加边框样式***************************************************/
$('#personsList').on('click','.personWrap',function(){
		$(this).toggleClass('selt');
	});
/*toggleClass:()-如果存在（不存在）就删除（添加）一个类。	*/
/*鼠标经过更换背景图*/
$('#personsList .personWrap').each(function(){
		$(this).hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
	});
	
/*********************获取验证码操作***************************************************/
function handleGetCerNum(){
		$('#getCerNum').on('click',function(){
			if(!$(this).hasClass('countDown')){
				var html = '<em id="cerCdTime">60</em>s后重新获取';
				$(this).addClass('countDown').empty().append(html);
				var timer = setInterval(function(){
					var time = parseInt($('#cerCdTime').text()); 
					if(time >= 1){
						$('#cerCdTime').text(time - 1)
					}else{
						$('#getCerNum').html('获取验证码').removeClass('countDown');
						clearInterval(timer);
					}
				},1000);
			}
		});
	}

/*********************输入框获取焦点与失去焦点效果***************************************************/
function handleInputFocus(){
		//输入提取金额
		$('#inputMonNum input').focus(function(){
			$('#inputMonNum').addClass("focus");
         });                               //第一个焦点的获取
		$('#inputMonNum input').blur(function(){
			var inputNum = parseInt($(this).val());
			var limit = parseInt($('#wdLimit').text());
			if(inputNum > limit){
				$('.limitAlert').removeClass('hide');     //如果输入的数额大于规定的，显示提示消息
			}else{                                        //如果输入的数额小于规定的，这里指改动后，没改动的话小于是不会出现警告提示的。
				if(!$('.limitAlert').hasClass('hide')){   //没隐藏
					$('.limitAlert').addClass('hide');    //隐藏
				}
			}
			$('#inputMonNum').removeClass("focus");
		});                                       
		//账户金额，增加/移除
		$('#busPassword input').focus(function(){
			$('#busPassword').addClass("focus");
		});
		$('#busPassword input').blur(function(){
			$('#busPassword').removeClass("focus");
		});
		//账户金额cerNum 增加/移除
		$('#cerNum input').focus(function(){
			$('#cerNum').addClass("focus");
		});
		$('#cerNum input').blur(function(){
			$('#cerNum').removeClass("focus");
		});
	}

/*********************star评价***************************************************/
//鼠标经过   变色
$('.starLink').each(function(){
		$(this).hover(function(){
			var index = $('.starStatusList .starLink').index($(this));
			if($('.evalPopup').hasClass('hide')){
				$('.starStatusList .starLink').each(function(n){
					if(n <= index){
						if(!($(this).hasClass('selt'))){
							$(this).addClass('selt');
						}
					}else{
						if($(this).hasClass('selt')){
							$(this).removeClass('selt');
						}
					}
				});
			}
		},function(){
			
		});
	});
	
/*********************鼠标点击tab功能***************************************************/
function handleTab(){
	$('.j_tabSelects').each(function(w){
		$(this).find('.j_tabItemLink').each(function(n){
			$(this).on('click',function(){
				$(this).closest('.j_tabSelects').find('.current').removeClass('current');   //这里是为了下一次点击时先移除样式
				$(this).closest('.j_tabItemLink').addClass('current');                      //增加样式
				$(this).closest('.j_tab').find('.j_tabContent').addClass('hide');
				$(this).closest('.j_tab').find('.j_tabContent').eq(n).removeClass('hide');
			});
		});
	});
}

/*********************鼠标滑过ul列表改变样式***************************************************/		
//鼠标滑过tab功能
function handleHoverTab(){                                   //.j_tabHovers: ul
	$('.j_tabHovers').each(function(w){
		$(this).find('.j_tabItemLink').each(function(n){   //.j_tabItemLink: li里面的div
			$(this).mouseenter(function(){                 //mouseenter():当鼠标指针穿过元素时，会发生 mouseenter 事件,不关子节点的事。mouseover关子节点的事。                    
				$(this).closest('.j_tabHovers').find('.current').removeClass('current');  //  移除默认选择的div的类
				$(this).closest('.j_tabItemLink').addClass('current');                    //   增加li里面div的类
				//前两个 有隐藏的增加 没有隐藏的隐藏
				$(this).closest('.j_tab').find('.j_tabContent').addClass('hide');         //   隐藏不需要显示的内容
				$(this).closest('.j_tab').find('.j_tabContent').eq(n).removeClass('hide'); //  移出当前需要显示的内容的隐藏样式
			});
		});
	});
}
//closest  :从当前元素开始,沿 DOM 树向上遍历，直到找到已应用选择器的一个匹配为止。

/*********************xxx***************************************************/		
$(function(){     
	$('').mouseover(function(){
		alert('xxx')
	})
});

$(document).ready(funtion(){
  $('').mouseover(function(){
  	
  	
  })

})
/*********************xxx***************************************************/	

