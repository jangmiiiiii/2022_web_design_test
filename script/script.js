//서브 메뉴 초기 숨기기
//javascript
/* const sub = document.querySelectorAll('.sub')
for(let i of sub){i.style.display='none'} */
//제이쿼리는 getElement ... querySelctor등의 별도 선언없이
//$달러사인으로 명령 시작 시 body의 대상을 모두 인식하여
//변수에 저장해준다.
//sub.css('display','none'); //JQ버전 for문없이도 jq에서 이렇게 사용가능
//sub[0].style.display='none' //JS버전
//jquery는 display:none or block등 자주사용하는 명령어를
//하나의 메서드 명령어로 단축해서 사용하기도 한다.
//display:none == hide() //숨기고
//display:block == show() //보인다
const sub = $('.sub')
const nav = $('nav > ul > li') 
console.log(sub)
sub.hide()
//메뉴에 마우스 올렸을때 서브 출력
nav.on('mouseover',function(){
    // sub.show()
    // sub.stop().slideDown()
    $(this).find('.sub').stop().slideDown() 
    //mouseEvent가 들어간 this(현재대상)내가 누르고싶은 서브메뉴만 슬라이드 뜨게하는것
})
nav.on('mouseout',function(){
    // sub.hide()
    // sub.stop().slideUp()
    sub.stop().slideUp()
})
//javascript 버전
/* 
DOM.addEventListener('mouseover'),function(){
    for(let i of sub){i.style.display='block'}
}
*/
//jquery 버전
//$('DOM').style.display='none' X -> js의 속성을 넣으면 안됨
//$('DOM').css('display','none') O
//$('DOM).hide() O