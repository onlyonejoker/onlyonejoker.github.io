(function() {
    var element = [];

    function Snake(key) {
        this.width = 20;
        this.height = 20;
        this.position = "absolute";
        this.key = key || "right";
        this.body = [{
            x: 100,
            y: 240,
            color: "orangered"
        }, {
            x: 80,
            y: 240,
            color: "orange"
        }, {
            x: 60,
            y: 240,
            color: "orange"
        }]
    }
    Snake.prototype.rander = function(obj) {
        remove();
        for (let i = 0; i < this.body.length; i++) {
            var div = document.createElement("div")
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.position = this.position;
            div.style.left = this.body[i].x + "px";
            div.style.top = this.body[i].y + "px";
            div.style.backgroundColor = this.body[i].color;
            obj.appendChild(div);
            element.push(div)
        }
    }

    function remove() {
        for (let i = element.length - 1; i >= 0; i--) {
            element[i].parentNode.removeChild(element[i])
        }
        element = [];
    }
    Snake.prototype.move = function(food, obj) {

        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.key) {
            case "up":
                this.body[0].y -= 20;
                break;
            case "down":
                this.body[0].y += 20;
                break;
            case "right":
                this.body[0].x += 20;
                break;
            case "left":
                this.body[0].x -= 20;
                break;
        }
        var x = Math.abs(this.body[0].x - food.x)
        var y = Math.abs(this.body[0].y - food.y)
        if (x < 40 && y < 40) {
            food.random(obj);
            var bodyElement = {
                x: this.body[this.body.length - 1].x,
                y: this.body[this.body.length - 1].y,
                color: "orange"
            }
            this.body.push(bodyElement);
            this.rander();
        }
    }
    window.Snake = Snake;
})()