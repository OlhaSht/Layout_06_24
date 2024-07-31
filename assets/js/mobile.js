function openMenu() {
    const body = document.querySelectorAll(".body")[0];
    body.classList.toggle("menu-open");
}

const menuItem = document.querySelectorAll(".mobile-main-nav-link");

for (let i = 0; i< menuItem.length; i++) {
    menuItem[i].addEventListener('click', function(){
    //    console.log(this.closest(".mobile-main-nav-li")) 
         this.closest(".mobile-main-nav-li").classList.toggle("active");
    });
    
}