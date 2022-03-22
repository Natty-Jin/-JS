const h1 = document.querySelector("div.hello:first-child h1");


/* toggle을 사용해서 코드를 좀 더 간추려보자. 즉 3-7에서 코드를 짰던
 contains, remove, add 등을 이용한 조건문(if, else)를 쓰지 않고
 토글을 사용하면, 완전히 똑같이 사용할 수 있다. 
 
 즉: toggle은 h1의
 classList에 clicked class가 이미 있는지 확인해서, 만약있다면
 togle이 clicked를 제거해준다. 만약 h1의 classList에 clicked가 존재하지
 않다면, toggle은 clicked를  classList에 추가를 해줄거임. 

 쉽게 말하면 스마트폰에 달린 버튼을 한번 누르면 스크린을 잠그고 다시 한번
 누르면 스크린을 켜주는 버튼 같은 것임.*/

function handleTitleClick()
/* const clickedClass = "clicked";
if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass)
} else {
    h1.classList.add(clickedClass);
}
} */ {
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);