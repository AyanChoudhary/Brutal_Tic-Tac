let count = 0;

function box (id) {
    this.id = id
    this.element = document.getElementById(id)
    this.checked = "0"
}

box.prototype = {
    constructor: box,
    clickon: function () {

        if (this.checked == "0") 
        {
            if (count%2 == 0) {

                this.element.style.backgroundImage = 'url(zero.png)';
                count++;

                if (count < 3) {                  
                    if (this.id != "13")
                    {
                        box13 = new box('13');
                        box13.clickon();
                    }

                    else
                    {
                        box19 = new box('19');
                        box19.clickon();
                    }
                }

                else {
                    box20 = new box('20');
                    box20.clickon();
                }
            }

            else{
                this.element.style.backgroundImage = 'url(cross.png)';
            }
            this.checked = "1"
            count++
        }
    }
}

let box1 = new box('1')
box1.element.onclick = function () {
    box1.clickon();
}