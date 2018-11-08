$(function(){
    // 中英文切换
    if(window.localStorage.getItem("JmI18nLang") == 'cn'){
        $(".i18n_btn.cn").addClass("active")
    }else{
        $(".i18n_btn.en").addClass("active")
    }
    
    $(".i18n_btn").on("click", function() {
        $(this).addClass("active").siblings(".i18n_btn").removeClass("active");
    });
})