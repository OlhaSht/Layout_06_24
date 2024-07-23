
const accordeon = document.querySelectorAll(".questions-paragraph-point");
let i;

const textQuestion = document.querySelectorAll(".questions-paragraph-text")
console.log(textQuestion)
for (let i = 0; i< accordeon.length; i++) {
    accordeon[i].addEventListener('click', function(){
        console.log(this.classList)
        this.classList.toggle("active");
        let textUnderQuestion = this.nextElementSibling;
        console.log(textUnderQuestion)
        if (textUnderQuestion.style. display === 'block') {
            textUnderQuestion.style. display === 'none'
        } else {
            textUnderQuestion.style. display === 'block'
        }
    });
    
}

// document.querySelectorAll('.questions-paragraph-subtitle').forEach(el => {
//     el.addEventListener('click', () => {
//         // Скрываем все открытые панели
//         document.querySelectorAll('.questions-paragraph-text').forEach(panel => {
//             if (panel !== el.nextElementSibling) {
//                 panel.style.display = 'none';
//             }
//         });
        
//         // Открываем или закрываем текущую панель
//         const panel = button.nextElementSibling;
//         panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
//     });
// });