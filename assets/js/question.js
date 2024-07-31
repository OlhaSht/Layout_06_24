
const accordeon = document.querySelectorAll(".accordeon");
let i;

for (let i = 0; i< accordeon.length; i++) {
    accordeon[i].addEventListener('click', function(){
        
        this.classList.toggle("active");
    });
    
}



