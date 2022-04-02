import { animate } from './helpers'
const modal = () => {
    if (document.title !== 'АО Навигационное оборудование' && document.title !== 'Контакты') {
        console.log("ds");
    const modal = document.getElementById('modal')
    const modalBtn = document.getElementById('modalButton')
    
    modalBtn.addEventListener('click', () => {
        modal.style.display = "flex"
        animate({
            duration: 300,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                modal.style.opacity = progress
            }
          });
    })

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal') || e.target.closest('.modal__close')) {
            animate({
                duration: 300,
                timing(timeFraction) {
                    return Math.sin(Math.acos(timeFraction));
                },
                draw(progress) {
                    modal.style.opacity = progress
                    if (progress === 0) {
                        modal.style.display = "none"
                    }
                }
              });
        }
    })
    }
    
}

export default modal