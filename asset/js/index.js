$(document).ready(function () {//DOM 구조가 준비되면 호출

  gsap.registerPlugin(SplitText); //텍스트 애니메이션 플러그인 등록
  gsap.defaults({ ease: "power3.out" });//GSAP 애니메이션 기본실행 속도

  $(window).on("load", function () { // HTML,CSS,IMG, VIDEO등 요소가 전부 파싱 된 다음 코드 실행

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



        // splitText
        const splitText = SplitText.create(".intro-txt", { type: "chars" }); // 분리할 텍스트 대상 지정
        gsap.set(splitText.chars, { // 텍스트 기본 스타일 설정
            autoAlpha: 0,   // opacity 0 + visibility hidden
            yPercent: -100,   // 아래서 올라오는 효과를 위해 위치 조정
        });

        // chars 등장
        gsap.to(splitText.chars, { // 
          autoAlpha:1,//opacity 1 + visibility visible
          yPercent: 0, //원래자리로
          duration: 0.5, // 애니메이션이 발생되는 시간
          stagger: 0.04, //각 글자별 시간차 애니메이션 실행하는 옵션
          onStart: ()=>{
            //숨겨둔 "intro-con" 함수 실행시 보이게
            gsap.set(".intro-con", { opacity:1,visibility: 'visible' }); 
          },
          onComplete: () => {
            const point = document.querySelector(".intro-txt.second .point");
            point?.classList.add("active");


            // 0.7초 뒤 intro-con 숨기기
            gsap.delayedCall(0.7, () => { //일정 시간 뒤 함수 호출 : delayedCall

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


