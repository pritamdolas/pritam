let menuBtn = document.getElementById ('menuBtn')

menuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Software Engineer','Front-End developer!', 'c c++ Programmer!', 'Python Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

let navlink = document.querySelectorAll('nav ul li a')

let sections = document .querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrollpos =window.scrollY
    sections.forEach(section =>{
        if(scrollpos > section.offsetTop && scrollpos < (section.offsetTop + 
            section.offsetHeight)){
                navlink.forEach(link =>{
                    link.classList.remove('active');
                    if(section.getAttribute('id') === link.getAttribute('href').substring(1))
                    {
                        link.classList.add('active')
                    }
                });
            }
    });
});
