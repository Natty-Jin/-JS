/* const title = document.getElementById("title");

title.innerText = "Got you";

console.log(title.className);
 */

/* 무조건 querySelector 또는 querySelectorAll을 사용하는 게 제일 좋다.
간혹, elementById를 사용해서 Id 값을 찾을 때도 사용하나,
querySelector를 사용하게 될 것임. */

// title.style.color = "blue";


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "red";
    console.log("Clicked!!!");
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!!!!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is leave!!!!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL Good");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);