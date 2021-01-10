$(function() {
  const newYearDate = new Date("Jan 1, 2022 00:00:00").getTime();
  const nowDate = new Date().getTime();

  const getNewYearDate = () => {
      const gap = newYearDate - nowDate;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const d = Math.floor(gap / day);
      const h = Math.floor((gap % day) / hour);
      const m = Math.floor((gap % hour) / minute);
      const s = Math.floor((gap % minute) / second);

      setNewYearDate(d, h, m, s)
  };

  const setNewYearDate = (d, h, m, s) => {
    $("#day").html(d);
    $("#hour").html(h);
    $("#minute").html(m);
    $("#second").html(s);
  }

  if(nowDate < newYearDate)
  {
    setInterval(() => {
      getNewYearDate();
    }, 1000);
  } else {
    setNewYearDate(0, 0, 0, 0)
  }
});
