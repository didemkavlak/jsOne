
let cName = prompt("İsminiz");
textName = document.querySelector("#myName")
textName.innerHTML = `${cName}`






function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
      
    var today = new Date();
    var g = today.getDay();
    var weekday = today.toLocaleString("default", { weekday: "long" })
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + " " + weekday;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();

 
