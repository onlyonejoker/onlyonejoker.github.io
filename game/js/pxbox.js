document.addEventListener("DOMContentLoaded", function() {
  var body = document.body;
  var sec = document.querySelector("section");
  var btnUp = body.children[1];
  var btn = sec.children[0];
  var me = document.getElementById("me");
  var over = document.getElementById("over");
  var time = document.getElementById("time");
  var juli = document.getElementById("length");
  var flag = false;
  var s = 0;
  var m = 0;
  var h = 0;
  var rem = parseFloat(window.getComputedStyle(body).fontSize);

  var gd = { //管道对象
    name: "guandao",
    num: 1,
    arr: [], //arr存储所有管道的ID
    width: 40,
  };
  btn.onclick = function() { //开始按钮
    this.style.display = "none"; //开始键隐藏
    me.style.display = "block" //小鸟显示
    sec.style.backgroundColor = "pink"; //大盒子改变背景颜色
    flag = true; //点击后才能进行各种效果
    over.style.display = "none"; //结束游戏框隐藏
  }
  setInterval(() => { //时间记录
    if (flag) {
      s++;
      if (s == 60) {
        s = 0;
        m++;
      }
      if (m == 60) {
        m = 0;
        h++;
      }
      if (h == 24) {
        s = 0;
        m = 0;
        h = 0;
      }
      h = h < 10 ? "0" + parseInt(h) : h;
      m = m < 10 ? "0" + parseInt(m) : m;
      s = s < 10 ? "0" + s : s;
      time.innerHTML = h + ':' + m + ':' + s;
      juli.innerHTML = (parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)) * 5 + "m";
    }
  }, 1000);
  setInterval(() => { //距离记录
    if (flag) {
      me.style.top = (me.offsetTop + 5) / rem + "rem";
      if (me.offsetTop >= 280) {
        csh();
      }
    }
  }, 100);

  function csh() { //结束初始化
    over.style.display = "block";
    btn.style.display = "block";
    me.style.display = "none";
    flag = false; //关闭各项操作
    me.style.top = 140 / rem + "rem";
    if (gd.arr.length > 0) { //查看盒子里共有几个管道
      for (let i = 0; i < gd.arr.length; i++) { //遍历所有实例管道
        var gds = document.getElementById(gd.arr[i]);
        sec.removeChild(gds); //删除所有管道
      }
      gd.arr = []; //删除管道对象的所有数据
    }
    s = 0;
    m = 0;
    h = 0;
    time.innerHTML = "0" + h + ':' + "0" + m + ':' + "0" + s;
    juli.innerHTML = 0 + "m" //初始化时间
  }
  btnUp.addEventListener("click", function() { //小鸟上飞
    me.style.top = (me.offsetTop - 20) / rem + "rem";
  }); //小鸟上飞

  //创建管道
  setInterval(() => {
    if (flag) { //只有当点击开始把flag切成true程序才能执行
      var gdup = document.createElement("div");
      var gddown = document.createElement("div"); //一次创建上下两个管道
      gdup.id = gd.name + gd.num;
      gddown.id = gd.name + (gd.num + 1); //设置上下管道的ID，id为“guandao1”和“guandao2”
      var length = gd.arr.length; //管道的个数
      if (length < 20) { //只能同时拥有20个管道
        gd.arr[length] = gdup.id;
        gd.arr[length + 1] = gddown.id; //把上下管道的id添加到管道对象数组里
        gdup.style.width = gd.width / rem + "rem";
        gddown.style.width = gd.width / rem + "rem"; //设置上下管道的宽度 ，上下管道的快读应该相同一样的
        (function height() { //设置管道的高
          var u = Math.ceil(Math.random() * 300 * (rem / 100))
          var d = Math.ceil(Math.random() * 300 * (rem / 100)) //上下管道的宽度在300范围内随机
          if (u + d < 260 * (rem / 100) && u + d > 240 * (rem / 100) && Math.abs(u - d) < 100 * (rem / 100)) { //上下管道的宽度相加不能大于280 否则小鸟20px无法通过，
            //这里唯一的要求就是千万别大于280，其他的都是可有可无 我为了合理设置两个管道长度不能低于240，并且两个管道的长度不能相差100
            gdup.style.height = u / rem + "rem";
            gddown.style.height = d / rem + "rem"; //给管道的高度赋值
            gdup.style.top = 0 + "px";
            gddown.style.bottom = 0 + "px"; //设置上下管道的初始y轴位置，上管道top0 下管道bottom0
            gdup.style.right = 0 + "px";
            gddown.style.right = 0 + "px"; //设置上下管道初始X轴位置，两个管道应该在同一X轴位置
            gd.num = gd.num + 2; //管道id自加2 这样就可以保证每个管道的独立性
            if (gd.num >= 20) {
              gd.num = 1; //可有可无
            }
            return; //递归最终要的退出条件
          } else {
            height(); //如果 u和d 的随机数不符合if的条件 继续找随机数，直到条件满足 ，当条件满足了return就退出了额
          }
        })() //立即执行函数
      }
      sec.appendChild(gdup); //添加各项参数都调好了的div管道
      sec.appendChild(gddown); //一次添加一组
    }
  }, 3000);
  //管道运动
  setInterval(() => {
    if (flag) { //开关
      for (let i = 0; i < gd.arr.length; i = i + 2) {
        var gdup = document.getElementById(gd.arr[i]);
        var gddown = document.getElementById(gd.arr[i + 1]);
        gdup.style.left = (gdup.offsetLeft - 5) / rem + "rem";
        gddown.style.left = (gddown.offsetLeft - 5) / rem + "rem"; //运动函数
        if (gdup.offsetLeft <= -40) { //鹏到大盒子的最左边了就删除
          gd.arr.splice(i, 2); //一次删除两组管道的id
          sec.removeChild(gdup)
          sec.removeChild(gddown) //一次删除两组管道
        }
        x = me.offsetLeft > gdup.offsetLeft && me.offsetLeft < gdup.offsetLeft + 40 || me.offsetLeft > gddown.offsetLeft && me.offsetLeft < gddown.offsetLeft + 40;
        y = me.offsetTop < gdup.offsetHeight || me.offsetTop + 20 > gddown.offsetTop;
        if (x && y) { //碰撞条件
          csh();
        }
      }
    }
  }, 100);
})