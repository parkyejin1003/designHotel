$(function(){
    const appBtn=$('.header-mobile-btn');
    const mMenu=$('.mobile-menu');
    const close=$('.appbarCloseBt');

    appBtn.on({click:function(){
        mMenu.stop().animate({left:0},500)
    }})
    close.on({click:function(){
        mMenu.stop().animate({left:'-100%'},500)
    }})


  
    /* const trandingWrap=document.querySelector('.tranding-wrap');
    let offset=trandingWrap.getBoundingClientRect().left;

    trandingWrap.addEventListener('mousemove', function(e){
        if(e.pageX >= window.innerWidth){
            return false
        }else{
            trandingWrap.style.left = (-(e.pageX-offset))+'px'
        }
    }) */
    const trandingWrap = document.querySelector('.tranding-wrap');
    const parent = trandingWrap.parentElement; // 부모 요소 기준
    let offset = trandingWrap.getBoundingClientRect().left;

    trandingWrap.addEventListener('mousemove', function (e) {
        const maxScroll = trandingWrap.scrollWidth - parent.clientWidth;
        let moveX = e.pageX - offset;

        // 범위를 제한
        if (moveX > maxScroll) moveX = maxScroll;
        if (moveX < 0) moveX = 0;

        trandingWrap.style.left = (-moveX) + 'px';
    });



});
  
document.addEventListener('DOMContentLoaded', () => {
    const header=document.getElementById('header');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 700){
            header.classList.add('scrolled')
        }else{
            header.classList.remove('scrolled')
        }
    })
})