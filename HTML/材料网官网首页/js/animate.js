function getStyle(el,st){

	if(el.currentStyle){
		return el.currentStyle[st]
	}else{
		return getComputedStyle(el,null)[st];
	}
}


function ani(el,st,end,t,fn){
	var start=parseFloat(getStyle(el,st));
	var s=end-start;
	var timer=setInterval(function(){

		start+=s/t*16.7;

		if(s>0){//根据s的正负关系确定end与start的大小关系
			
			if(start>=end){
			  	start=end;
			  	clearInterval(timer);
			  	el.style[st]=st=="opacity"?start:start+"px";
			  	fn?fn():null;//调用回调函数
			}else{
				el.style[st]=st=="opacity"?start:start+"px";
			}
		}else{
			
			if(start<=end){
			  	start=end;
			  	clearInterval(timer);
			  	el.style[st]=st=="opacity"?start:start+"px";
			  	fn?fn():null;//调用回调函数
			}else{
				el.style[st]=st=="opacity"?start:start+"px";
			}
		}
		

		

	},16.7)

}
