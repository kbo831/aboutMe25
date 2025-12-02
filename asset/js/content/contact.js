$(document).ready(function(){

    //gsap 스크롤 트리거 등록
    gsap.registerPlugin(ScrollTrigger)  

    window.addEventListener("load",()=>{//이미지,html,css 등 모든 리소스가 렌더링된 후 실행
         //스크롤 트리거할 프로젝트 배열에 담기
        const projectItem = gsap.utils.toArray('.box');
        // 초기 상태 설정
        gsap.set("#contact .sc-title", { opacity: 0, visibility:"hidden", y: 100 });
        gsap.set("#contact .skip-card .link", { opacity: 0, visibility:"hidden", y: 100 });

    
    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: "#contact", // 스크롤 트리거 기준 컨테이너
        start: "top 70%", // 애니메이션 시작기준
        toggleActions: "play none none reverse"
        }
    });
    // about 타이틀 등장 
    tl.to("#contact .sc-title", {
        opacity: 1,
        visibility:"visible",
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    // 2) about 리스트 li 순차 등장
    .to("#contact .skip-card .link", {
        opacity: 1,
        visibility:"visible",
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
    }, "-=0.2") // 타이틀 끝나기 0.2초 전부터 실행


    });
    //END


});