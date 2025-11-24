$(document).ready(function () {
  gsap.registerPlugin(SplitText);
  gsap.defaults({ ease: "power3.out" });

  $(window).on("load", function () {
    gsap.to(".intro-con", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      onComplete: () => {
        // split + set
        const splitText = SplitText.create(".intro-txt", { type: "chars" });
        gsap.set(splitText.chars, { autoAlpha: 0, yPercent: -200 });

        // chars 등장
        gsap.to(splitText.chars, {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.02,
          onComplete: () => {
            const point = document.querySelector(".intro-txt.second .point");
            point?.classList.add("active");


            // 30초 뒤 intro-con 숨기기
            gsap.delayedCall(1, () => {

              const tl = gsap.timeline(); // 순서 제어용 타임라인 생성

              tl.to(".intro-con", { opacity: 0, duration: 1, ease: "power1.out" })
              .fromTo(".skip-card",
                { opacity: 0, y: 100 },   // 시작 위치
                { opacity: 1, visibility: "visible", y: 0, duration: 1, ease: "power3.out",
                  onComplete: () => {
                      console.log("skip-card 애니메이션 완료!");
                    if (window.innerWidth > 1100) { // 윈도우 화면 1100px 이상에서만 
                        const gap = 30;  // 카드 간격(px)
                        const cards = gsap.utils.toArray(".skip-card .link");
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
                 } // 마지막위치 
              );

            });
          }
        });

     
        
       

      }
    });
  });
});
