var countDownDate = new Date("Jan 1, 2020 0:0:0").getTime();
var notime = '<br>';
var x = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + "일 " + hours + "시간 "+ minutes + "분 " + seconds + "초 " + notime + "후에 시작합니다!";

if (distance < 0) {
clearInterval(x);
document.getElementById("timer").innerHTML = "시작 되었습니다!";
}
}, 1000);

window.onload = function() {
    console.log("timer loaded")
    x;
}