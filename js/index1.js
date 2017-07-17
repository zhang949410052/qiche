$.ajax({
	type:"get",
	url:"http://127.0.0.1:8523/",
	async:true,
	dataType:"json",
	success:function(data){
		var str = "";
		//show 页面渲染
			for(var i in data.show){
				str+="<li><a href='"+data.show[i].href+"'><img src='../image/"+data.show[i].img+"'/><p>"+data.show[i].text+"</p></a></li>"
			}
			$(".show_box").html(str);
			
			
	   //trends 页面渲染
			var str_two = "";
			for(var a in data.trends){
				str_two +="<li class='clear'><p class='left'><a href='#'>"+data.trends[a].text+"</a></p><p class='right'><a href='#'>"+data.trends[a].text2+"</a></p></li>"
			}
		
			$(".trends_content").html(str_two);
			
			//word 页面渲染
			var str_three = "";
			for(var b in data.word){
				str_three +=" <li class='clear'><div class='word_content_left left'><p>"+data.word[b].environment+"</p><p>"+data.word[b].service+"</p><p>"+data.word[b].product+"</p><p>"+data.word[b].price+"</p></div><div class='word_content_right left'><p><span class='user'><a href='#'>"+data.word[b].price_name+"</a></span>于<span>"+data.word[b].time+"</span>发表评论</p><p class='en'>"+data.word[b].user+"</p> <div class='reply'><p class='reply_user'><span>商家回复：</span>"+data.word[b].reply+"</p></div></div></li>"
			}
			$(".word_content").html(str_three);
			
			//favorable页面渲染
			 var str_foul = ""
			 for(var c in data.favorable){
			 	str_foul +="<li><div><a><img src='../image/"+data.favorable[c].img2+"'/></a></div><div><p>"+data.favorable[c].text1+"</p><p>立即节省:<span class='favorable_span'> "+data.favorable[c].text2+" 元 </span></p><p>还有<span class='favorable_span'> "+data.favorable[c].text3+" 天 </span>结束</p><p>"+data.favorable[c].text4+"</p><button>立即打印</button><button>免费手机下载</button></div></li>"
			 }
	         $(".favorable_ul").html(str_foul);
	              
	              
	        //sales_new 页面渲染      
	    var str_free = "";
		for(var e in data.sales_new){
				str_free="<div class='new_top' ><h3>"+data.sales_new[e].text+"</h3><p>标签：特价商品　促销时间：<span>"+data.sales_new[e].text1+"</span>至<span>"+data.sales_new[e].text2+"</span></p></div><div class='new_bot' ><img src='../image/"+data.sales_new[e].src+"'/><div><p>"+data.sales_new[e].text3+"</p><p>"+data.sales_new[e].text4+"</p><p>"+data.sales_new[e].text5+"</p><p>"+data.sales_new[e].text6+"</p><p>"+data.sales_new[e].text7+"</p><p>"+data.sales_new[e].text8+"</div></div>"
		}
			$(".sa_bottom2").html(str_free);
			
			//sales 页面渲染
			var str_six = "";
			for(var f in data.sales){
				str_six +="<a href='#'><div class='bot_top'><p>["+data.sales[f].promotion_1+"]</p>"+data.sales[f].promotion_2+"</div></a><div class='bot_left'><p>"+data.sales[f].promotion_3+"</p></div><div class='bot_right'><p>开始："+data.sales[f].start+"</p><p>截止："+data.sales[f].end+"</p></div>"
			}
			$(".sa_bot").html(str_six);
			
			
	
			
	//show_new页面效果
	   var spans = document.getElementsByClassName("a");
		var divs = document.getElementsByClassName("divimg");
		for(var i = 0;i<spans.length;i++){
			divs[i].style.display = "none";
			divs[0].style.display = "block";
			spans[i].onclick = function(){
				for(var j = 0;j<spans.length;j++){
					if(spans[j] == this){
						divs[j].style.display = "block";
					}
					else{
						divs[j].style.display = "none";
					}
				}
			}
		}
		
		
		
	}
});