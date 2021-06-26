(function() {
    var element = [];

    function Food() {
        this.width = 20;
        this.height = 20;
        this.bcc = "green";
        this.position = "absolute";
        //this.x = Math.floor(Math.random() * 780);
        //this.y = Math.floor(Math.random() * 480);
    }
    Food.prototype.random = function(obj) {
        this.x = Math.floor(Math.random() * 760);
        this.y = Math.floor(Math.random() * 460);
        remove();
        var div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.position = this.position;
        div.style.left = this.x + 20 + "px";
        div.style.top = this.y + 20 + "px";
        div.style.backgroundColor = this.bcc;
        obj.appendChild(div);
        element.push(div)
    }

    function remove() {
        for (let i = element.length - 1; i >= 0; i--) {
            element[i].parentNode.removeChild(element[i])
        }
        element = [];
    }
    window.Food = Food; //闭包
})(); //失误产生函数