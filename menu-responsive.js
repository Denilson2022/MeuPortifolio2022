function menuResponsive(){

    let mobileMenu = document.querySelector('.nav');
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open')
    }else{
        
        mobileMenu.classList.add('open');

    }
}


