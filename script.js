function timeCount() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if(hour<10)hour = "0"+hour;

    var minute = today.getMinutes();
    if(minute<10)minute = "0"+minute;

    var second = today.getSeconds();
    if(second<10)second = "0"+second;

    document.querySelector("#clock-div #hour").innerHTML = hour+":"+minute+":"+second
    document.querySelector('.hello-h2').innerHTML = day+"/"+month+"/"+year

    setTimeout("timeCount()", 1000);
}

const userName = document.querySelector(".user-name input");
const userContainer = document.querySelector(".user-name");
const submit = document.querySelector(".user-name .submit");
const namePlace = document.querySelector(".hello-h2");


submit.addEventListener("click", () => {
  if (userName != "") {
    userContainer.style.display = "none";
    namePlace.innerHTML = userName.value;
  }
});
