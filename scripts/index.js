const list = document.querySelector('.steps-list');
        const arrowUp = document.querySelector('.arrow-up');
        const arrowDown = document.querySelector('.arrow-down');

        const fallBodys = document.querySelectorAll('.fall-list-item-body');
        const fallArrows = document.querySelectorAll('.fall-list-item-header img');
        const fallItems = document.querySelectorAll('.fall-list-item');
        const fallBack = document.querySelectorAll('.fall-back');
        const burger = document.querySelector('.burger');
        const mob = document.querySelector('.header__mobile');
        const close = document.querySelector('.close');
        const mobCont = document.querySelector('.mob__cont')

        arrowUp.addEventListener('click', function() {
            list.scrollBy({ top: -186, behavior: 'smooth' });
        });
        arrowDown.addEventListener('click', function() {
            list.scrollBy({ top: 176, behavior: 'smooth' });
        });

        function hideFall() {
            fallBodys.forEach((el, index) => {
                fallArrows[index].style.transform = 'translateY(-50%) rotate(0deg)';
                el.style.transform = 'translateY(-100%)'
                el.style.position = 'absolute';
                fallItems[index].style.marginBottom = 0;
                fallBodys[index].style.boxShadow = 'none'
                fallBack[index].style.transform = 'translateY(-78%)'
                
            })
        }
        let activeFall;
        function showMenu(index) {
            fallArrows[index].style.transform = 'translateY(-50%) rotate(-45deg) ';
            fallItems[index].style.transition = 'all 0.3s ease';
            fallItems[index].style.marginBottom = fallBodys[index].offsetHeight + 'px';
            fallBodys[index].style.transform = 'none';
            fallBodys[index].style.boxShadow =  `0 4px 40px 0 rgba(245, 247, 220, 0.4)`; 
            fallBack[index].style.transform = 'translateY(-99%)';
        }

        fallArrows.forEach((el, index) => {
            el.addEventListener('click', function (event) {
                if(index != activeFall) {
                    hideFall();
                    activeFall = index;
                    showMenu(index);
                } else{
                    hideFall();
                    activeFall = null;
                }
                
            })
        })
        hideFall();

        const body = document.querySelector('body')

        burger.addEventListener('click', function() {
            mob.style.display = 'block';
            body.style.overflow = 'hidden';
            setTimeout(()=>{
                mobCont.style.transform = 'none'
              
            }, 1)
            
        });
        close.addEventListener('click', function() {
            mobCont.style.transform = 'translateX(-100%)';
            setTimeout(()=>{
                mob.style.display = 'none'
            body.style.overflow = 'auto';
            },300)
            
        })


        const modalClose = document.querySelector('.modal-cont-close');
        const overlayModal = document.querySelector('.overlay-modal');
        const modalCont = document.querySelector('.modal-cont');
        const modal = document.querySelector('.modal');
        const button = document.querySelector('.main__screen-button')

        let modalOpen = false;

        function closeModal () {
            overlayModal.style.background = '#00000000';
            modalCont.style.transform = 'translateY(-200%)';
            setTimeout(()=> {
                modal.style.display = 'none';
            }, 500)
        }

        function openModal () {
            modal.style.display = 'block';
            setTimeout(()=> {
                overlayModal.style.background = '#0F032686';
                modalCont.style.transform = 'translateY(0%)';
            }, 1)
            
                
         
        }

        button.addEventListener('click', function() {
            openModal()
        })

        modalClose.addEventListener('click', function() {
           
                closeModal();
           
            
        })


       
            const links = document.querySelectorAll('.nav__list-item a');
        
            links.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
        
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
      
 