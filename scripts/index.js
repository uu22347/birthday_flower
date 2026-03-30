const userYear = document.querySelector('#user_year');
const userMonth = document.querySelector('#user_month');
const userDay = document.querySelector('#user_day');
const birthdayBtn = document.querySelector('#birthday_btn');
const error_msg = document.querySelectorAll('.error_msg');
console.log(userMonth, birthdayBtn, error_msg);


//태어난 달을 입력안하고 버튼을 클릭하면
//error_msg2 출력하기
birthdayBtn.addEventListener('click',function(){
    //태어난 달의 값이 빈문자열과 같으면 콘솔실행
    if(userMonth.value == '') msg_func(1, 'block');
    else msg_func(1);
    //태어난 년도 입력안하고 버튼 클릭시 해당 error_msg 출력하기
    if(userYear.value == '') msg_func(0, 'block');
    else msg_func(0);
    //태어난 일 입력안하고 버튼 클릭시 해당 error_msg 출력하기
    if(userDay.value == '') msg_func(2, 'block');
    else msg_func(2);
})

//반복 목적 함수(이벤트 밖)
function msg_func(index, value='none'){
    return error_msg[index].style.display = value;
}
