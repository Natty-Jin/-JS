const h1 = document.querySelector("div.hello:first-child h1");


/* className을 active로 설정해서 CSS에서 색깔을 토마토 색으로 변경시켰지만
className을 조건문(if)으로 active가 아닌, 값이 없는 것으로 변환시켜주면서
원래의 색깔로 돌아오게끔 하다가, 다시 else로 active를 사용하여 토마토색으로
변경되게끔 코드를 탈바꿈 함. */

function handleTitleClick() {
    const clickedClass = "clicked sexy-font";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);