/* const title = document.getElementById("title");

title.innerText = "Got you";

console.log(title.className);
 */

/* 무조건 querySelector 또는 querySelectorAll을 사용하는 게 제일 좋다.
간혹, elementById를 사용해서 Id 값을 찾을 때도 사용하나,
querySelector를 사용하게 될 것임. */

// title.style.color = "blue";


/* const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
 */


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

/* h1.style.color 는 css 에서 하는 게 좀 더 유용하기 때문에
잠깐 예시로만 사용을 한다. */

h1.addEventListener("click", handleTitleClick);