$(document).ready(function(){

    //mobile menu
    const mobileMenuBtn  = $(".m_open-btn"); // 모바일 메뉴 버튼
    mobileMenuBtn.click(function(){ // 버튼 클릭시 

        const toggleBtn = $(this);
        const toggleMenu = $(".m_header");
        console.log("toggleBtn",toggleBtn); 
        console.log("toggleMenu",toggleMenu); 

        //모바일 메뉴 버튼 클릭시 active 있으면 , 삭제 , 없으면 추가 
        toggleBtn.hasClass("active")? 
            toggleBtn.removeClass("active") :toggleBtn.addClass("active");
        //모바일 메뉴 버튼 active이면 메뉴콘텐츠 active  삭제 , 아니면 추가
        toggleBtn.hasClass("active")?
            toggleMenu.addClass("active"):toggleMenu.removeClass("active") 
    });




//end
});
