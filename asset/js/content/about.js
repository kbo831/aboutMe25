$(document).ready(function(){

    const photoOpenBtn = $(".figure");
    photoOpenBtn.click(function(){
            const realPhoto = $("#real-photo");
            if( realPhoto.hasClass("active")){
                realPhoto.removeClass("active");
                photoOpenBtn.attr("title","증명사진보기버튼활성화");
                photoOpenBtn.find("strong").text("증명사진보기");
            }else{
                realPhoto.addClass("active");
                photoOpenBtn.attr("title","증명사진보기버튼비성화");
                photoOpenBtn.find("strong").text("증명사진닫기");
            }

    })


});