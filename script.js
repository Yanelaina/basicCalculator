let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('span');
let value = document.getElementById('value'); 

for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', function() {
        if (this.innerHTML == "=") {
            // console.log("value : " + value.innerHTML)
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML == 'clear') {
                // console.log('je suis ici');
                value.innerHTML = "";
            } else { 
                if (this.innerHTML == '⌫') {
                    if (value.innerHTML.length > 1) {
                        // console.log("I'm in backspace")
                        value.innerHTML = value.innerHTML.slice(0, -1);
                    } else {
                        value.innerHTML = "0";
                    }
                } else {
                    if (value.innerHTML == "0"){
                        value.innerHTML = this.innerHTML;
                    } else {
                    value.innerHTML += this.innerHTML;
                }
                };
                
            };
        }
    });
}