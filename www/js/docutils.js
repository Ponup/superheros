define(function() {
    function width(){
           return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
    }
    function height(){
           return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
    }
    return { width: width, height: height };
});
