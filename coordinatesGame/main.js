const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const coordinates = document.querySelector(".coordinates");
const body = document.querySelector("body");

let targetOn = false;

// ⬇️ 모든 리소스가 load 된 후에 이벤트를 진행하겠다
window.addEventListener("load", () => {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    let targetHalfWidth = target.getBoundingClientRect().width / 2;
    let targetHalfHeight = target.getBoundingClientRect().height / 2;

    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    coordinates.style.transform = `translate(${x}px, ${y}px)`;
    coordinates.innerHTML = `X : ${e.clientX}px Y: ${e.clientY}px`;
  });

  target.addEventListener("click", () => {
    targetOn = !targetOn;
    targetOn
      ? (body.style.background = "tomato")
      : (body.style.background = "black");
  });
});
