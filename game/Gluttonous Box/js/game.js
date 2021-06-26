(function() {
    var that = null;

    function Start() {
        this.food = new Food();
        this.snake = new Snake();
        that = this;
    }

    function time(obj, food) {
        var timer = setInterval(function() {
            that.snake.move(food, obj);
            that.snake.rander(obj);
            if (that.snake.body[0].y > 460 || that.snake.body[0].y < 20 || that.snake.body[0].x > 760 || that.snake.body[0].x < 20) {
                clearInterval(timer);
            }
            //var x = Math.abs(that.snake.body[0].x - that.food.x)
            //var y = Math.abs(that.snake.body[0].y - that.food.y)
            //if (x < 20 && y < 20) {
            //    that.food.random(obj);
            //    console.log(1);
            //}
        }, 100)

    }

    Start.prototype.rander = function(obj) {
        this.snake.rander(obj);
        this.food.random(obj)
        time(obj, this.food);
        document.addEventListener("keyup", function(e) {
            switch (e.key) {
                case "ArrowLeft":
                    that.snake.key = "left"
                    break;
                case "ArrowUp":
                    that.snake.key = "up"
                    break;
                case "ArrowRight":
                    that.snake.key = "right"
                    break;
                case "ArrowDown":
                    that.snake.key = "down"
                    break;
            }
        })
    }
    window.Start = Start;
})()
var sec = document.querySelector("section");
var start = new Start();
start.rander(sec);