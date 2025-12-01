$(document).ready(function(){

    const photoOpenBtn = $("button.figure");
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
    });


    //gsap 스크롤 트리거 등록
    gsap.registerPlugin(ScrollTrigger)  

    //이미지,html,css 등 모든 리소스가 렌더링된 후 실행

     // 초기 상태 설정
    gsap.set("#about .sc-title", { opacity: 0, y: 100 });
    gsap.set("#about .full-list .li", { opacity: 0, y: 100 });
    gsap.set("#about .full-list .activity .desc > li", { opacity: 0, y: 100 });
    
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: "#about", // 스크롤 트리거 기준 컨테이너
        start: "top 70%", // 애니메이션 시작기준
        toggleActions: "play none none reverse"
        }
    });
    // about 타이틀 등장 
    tl.to("#about .sc-title", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    // 2) about 리스트 li 순차 등장
    .to("#about .full-list .li", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.2") // 타이틀 끝나기 0.2초 전부터 실행

    // 3) 활동(activity) 리스트의 내부 li
    .to(".full-list .activity .desc > li", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out"
    }, "+=0.2"); // 리스트 등장 후 0.2초 쉬고 출발

    //END
});