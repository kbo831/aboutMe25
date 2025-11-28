$(document).ready(function () {
  gsap.registerPlugin(SplitText);
  gsap.defaults({ ease: "power3.out" });

  $(window).on("load", function () {

       //spreadCard 
        function spreadCard(){
            console.log("스프레드 카드 실행")
            const cards = gsap.utils.toArray(".skip-card .link");
           if (window.innerWidth > 1100) { // 윈도우 화면 1100px 이상에서만 
              const gap = 30;  // 카드 간격(px)
              const center = 50; // 가운데 (%)
              cards.forEach((card, i) => {
                const offset = (i - 1) * gap; 
                gsap.to(card, {
                  left: `calc(${center}% + ${offset}%)`,
                  duration: 1,
                  ease: "power3.out"
                });
              });
            }
        }



        // split + set
        const splitText = SplitText.create(".intro-txt", { type: "chars" });
        gsap.set(splitText.chars, {
            autoAlpha: 0,   // opacity 0 + visibility hidden
            yPercent: -100,   // 아래서 올라오는 효과를 위해 위치 조정
        });

        // chars 등장
        gsap.to(splitText.chars, {
          yPercent: 0,
          autoAlpha:1,//opacity + visibility를 동시에 조절하는 GSAP 속성
          duration: 0.5, // 애니메이션이 발생되는 시간
          stagger: 0.04, //요소를 순서대로 조금씩 시간 차를 두고 애니메이션 시키는 옵션
          onComplete: () => {
            const point = document.querySelector(".intro-txt.second .point");
            point?.classList.add("active");


            // 30초 뒤 intro-con 숨기기
            gsap.delayedCall(0.7, () => {

              const tl = gsap.timeline(); // 순서 제어용 타임라인 생성

              tl.to(".intro-con", { opacity: 0, duration: 0.8, ease: "power1.out" })
              .fromTo(".skip-card",
                { opacity: 0, y: 100 },   // 시작 위치
                { opacity: 1, visibility: "visible", y: 0, duration: 0.7, ease: "power3.out",
                  onComplete: () => {
                      console.log("skip-card 애니메이션 완료!");
                      spreadCard();
                  }
                 } // 마지막위치 
              );

            });
          }
        });
        //end
      });
});


