(() => {
  const sceneInfo = [
    {
      // 0
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 해당 배수로 적용
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      },
      values: {
        messageA_opacity: [0, 1],
        messageB_opacity: [0, 1],
        messageC_opacity: [0, 1],
        messageD_opacity: [0, 1]
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 5, // 브라우저 높이의 해당 배수로 적용
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      // 2
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 해당 배수로 적용
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      // 3
      type: "sticky",
      heightNum: 5, // 브라우저 높이의 해당 배수로 적용
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  function setLayout() {
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    scrollLoop();
  }

  let yOffset = 0;
  let prevScrollHeight = 0; // 현재 스크롤보다 이전에 위치한 스크롤 섹션들의 스크롤 높이
  let currentScene = 0; // 현재 활성화된 씬

  function playAnimation() {}

  function scrollLoop() {
    prevScrollHeight = 0;

    // 강의 코드 별로여서 바꿈
    let checkSceneOffset = 0;
    for (; checkSceneOffset < sceneInfo.length; checkSceneOffset++) {
      prevScrollHeight += sceneInfo[checkSceneOffset].scrollHeight;
      if (yOffset < prevScrollHeight) {
        break;
      }
    }

    // 강의에 있는 변수 맞춰주기 위해서 수정
    prevScrollHeight -= sceneInfo[checkSceneOffset].scrollHeight;
    currentScene = checkSceneOffset;

    document.body.setAttribute("id", `show-scene-${currentScene}`);
  }

  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    scrollLoop();
    playAnimation();
  });
  window.addEventListener("resize", setLayout);
  window.addEventListener("load", setLayout);
})();
