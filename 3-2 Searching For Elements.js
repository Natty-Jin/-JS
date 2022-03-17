/* const title = document.getElementById("title");

title.innerText = "Got you";

console.log(title.className);
 */

/* 무조건 querySelector 또는 querySelectorAll을 사용하는 게 제일 좋다.
간혹, elementById를 사용해서 Id 값을 찾을 때도 사용하나,
querySelector를 사용하게 될 것임. */
const title = document.querySelector(".hello h1");

title.innerText = "HEllllllo";
console.log(title);