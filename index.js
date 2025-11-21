$(document).ready(function () {
  //DOM 트리 구조가 완성되었을 때 실행됨(이미지,,폰트,비디오 무시, html 구조만 파싱되면 실행)
  //gsap 플러그인등록
  gsap.registerPlugin(ScrollTrigger, SplitText);

  //전역 기본으로 설정할 효과
  gsap.defaults({ ease: "back.out(1.4)" });

  //타임라인 생성 (순서 제어용)
  const tl = gsap.timeline();

  // 애니메이션 시작 전 스크롤 막기
  $("body").css("overflow", "hidden");

  $(window).on("load", function () {
    // 이미지, 폰트, 외부 리소스까지 전부 로드된 후 실행됨
    // 로드 되고 애니메이션 실행
    tl.to(".loader", {
      transformOrigin: "left bottom",
      rotate: -100,
      duration: .8,
      ease: "sine.in",
      stagger: {
        each: 0.2,
        from: "end",
      },
    }).add(() => {
      //텍스트 애니메이션 실행

      //splitText 대상지정 생성
      const splitText = SplitText.create(".intro-txt", { type: "chars" });

      //애니메이션 실행 전 텍스트 상태 초기값 설정
      gsap.set(splitText.chars, {
        autoAlpha: 0, // opacity :0 , visibility:hidden
        transformOrigin: "center center",
        yPercent: -200,
      });

      // gsap 애니메이션 전에 active 클래스 추가, intro-con 등장
      document.querySelector(".intro-con")?.classList.add("active");

      //gsap 애니메이션 설정
      tl.to(splitText.chars, {
        yPercent: 0,
        autoAlpha: 1, // opacity :1 , visibility:visible
        opacity: 1,
        ease: "power3.out",
        duration: .8,
        stagger: {
          each: 0.03,
        },
      });

      tl.add(() => {
        // 텍스트 분해 복원
        splitText.revert();
      });

      tl.add(() => {
        // 복원된 구조에 스케일적용할 텍스트 클래스 추가
        document
          .querySelector(".intro-txt.second .point")
          ?.classList.add("active");
      })
        .add(() => {
          // 애니메이션 끝나면 스크롤 풀기
          $("body").css("overflow", "");
        })
        // .add(() => {
        //   document.querySelector(".sc.intro")?.classList.add("hide");
        // }, "+=1");

      //end
    });
    //end
  });




});
