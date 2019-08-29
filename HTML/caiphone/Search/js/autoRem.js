(function(){
    function browserResize(){
        var w=window.innerWidth;//获取浏览器窗口宽度
        document.documentElement.style.fontSize=w/750*100+"px";
    }
    browserResize();
    
    var browserTimer;
    
    window.addEventListener("resize",function(){
    
        clearTimeout(browserTimer);
        browserTimer=setTimeout(browserResize,200)
    
    })
})();