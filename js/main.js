$(document).ready(() => {
  let newYear = new Date("Jan 1, 2021 00:00:00").getTime();

  let getNewYear = () => {
    var now = new Date().getTime();
    var gap = newYear - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / day);
    var h = Math.floor((gap % day) / hour);
    var m = Math.floor((gap % hour) / minute);
    var s = Math.floor((gap % minute) / second);

    $("#day").html(d);
    $("#hour").html(h);
    $("#minute").html(m);
    $("#second").html(s);
  };

  setInterval(() => {
    getNewYear();
  }, 1000);
});
