document.addEventListener("DOMContentLoaded", function() {
  var sec = document.querySelector("section");
  //创建我方飞机
  var Fly = document.createElement("div")
  Fly.id = "myFly";
  document.body.appendChild(Fly);
  //鼠标跟随
  var myFlyX = 0;
  var myFlyY = 0;
  var flag = false;
  document.addEventListener("mousemove", function(e) {
    var myFly = document.getElementById("myFly")
    myFlyX = e.pageX - 10;
    myFlyY = e.pageY - 60;
    if (myFlyX >= sec.offsetLeft && myFlyX <= sec.offsetLeft - 20 + 300 && myFlyY >= sec.offsetTop && myFlyY <= sec.offsetTop - 20 + 500) {
      myFly.style.left = myFlyX + "px";
      myFly.style.top = myFlyY + "px";
      myFly.flag = true;
    } else {
      myFly.flag = false;
    }
  });

  //创建子弹
  var zdobj = {
    name: "zidan",
    num: 1,
    arr: [],
    width: 6,
    height: 12
  };
  //子弹h函数
  zidans();

  function zidans() {
    setInterval(function() {
      if (Fly.flag) {

        var zd = document.createElement("div")
        zd.id = zdobj.name + zdobj.num;
        var length = zdobj.arr.length;

        if (length < 50) { //设置子弹个数
          zdobj.arr[length] = zd.id + "|";
          //将子弹id、top、left存入数组以|分隔
          zd.style.width = zdobj.width + "px";
          zd.style.height = zdobj.height + "px";
          zd.style.backgroundColor = "green";
          //子弹样式
          zd.style.top = Fly.offsetTop + 4 + "px";
          zdobj.arr[length] = zdobj.arr[length] + zd.style.top + "|";
          //将子弹id、top、left存入数组以|分隔
          zd.style.left = Fly.offsetLeft + 7 + "px";
          zdobj.arr[length] = zdobj.arr[length] + zd.style.left;
          //将子弹id、top、left存入数组以|分隔
          zdobj.num++;
          if (zdobj.num >= 50) {
            zdobj.num = 1;
          }
        }
        document.body.appendChild(zd);
      }
    }, 1000);
  }
  //运动函数
  function animate() {
    if (Fly.flag) {
      for (let i = 0; i < zdobj.arr.length; i++) {
        var newArr = zdobj.arr[i].split("|")
        var zd = document.getElementById(newArr[0])
        zd.style.top = zd.offsetTop - 5 + "px"
        if (zd.offsetTop < 0) {
          zdobj.arr.splice(i, 1)
          zd.parentNode.removeChild(zd)
        }
      }

    }
  }
  //创建敌机
  var Fobj = {
    name: "diji",
    num: 1,
    arr: [],
  };
  //敌机函数
  Fs();
  console.log(sec.offsetTop);
  console.log(sec.offsetLeft);

  function Fs() {
    setInterval(function() {
      if (Fly.flag) {
        var dj = document.createElement("div")
        dj.id = Fobj.name + Fobj.num;
        var length = Fobj.arr.length;
        var ran = Math.floor(Math.random() * 280)
        if (length < 50) { //设置敌机个数
          Fobj.arr[length] = dj.id;
          dj.style.top = sec.offsetTop + "px";
          dj.style.left = sec.offsetLeft + ran + "px";
          dj.style.backgroundColor = "red";
          Fobj.num++;
          if (Fobj.num >= 50) {
            Fobj.num = 1;
          }
        }
        document.body.appendChild(dj);
      }
    }, 1000);
  }
  //运动函数
  function Fanimate() {
    if (Fly.flag) {
      for (let i = 0; i < Fobj.arr.length; i++) {
        var newArr = Fobj.arr[i]
        var dj = document.getElementById(newArr)
        dj.style.top = dj.offsetTop + 5 + "px"
        if (dj.offsetTop > 480) {
          Fobj.arr.splice(i, 1)
          dj.parentNode.removeChild(dj)
        }
      }
    }
  };
  //碰撞
  setInterval(() => {
    animate();
    Fanimate();
    if (Fly.flag) {
      for (let i = 0; i < Fobj.arr.length; i++) {
        var dj = document.getElementById(Fobj.arr[i])
        for (let j = 0; j < zdobj.arr.length; j++) {
          var newArr = zdobj.arr[j].split("|")
          var zd = document.getElementById(newArr[0])
          var x = zd.offsetLeft > dj.offsetLeft && zd.offsetLeft < dj.offsetLeft + 20;
          var y = zd.offsetTop > dj.offsetTop && zd.offsetTop < dj.offsetTop + 20;
          if (x && y) {
            Fobj.arr.splice(i, 1)
            dj.parentNode.removeChild(dj)
            zdobj.arr.splice(j, 1)
            zd.parentNode.removeChild(zd)
          }
        }
      }
    }
  }, 100);
})