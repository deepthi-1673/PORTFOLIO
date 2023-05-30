let MenuBtn=document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-bars')
    
})
let typed=new Typed('.auto-input',{
    strings:['Student!','intern!','debator!','writer!','strategist!','FreeLancer!'],
    typedSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})


let navLinks=document.querySelecterAll('nav ul li a')
let sections=document.querySelectorAll('section')
window.addEventListener('scroll',function(){
    const scrollPos=window.scrollY
    sections.forEach(section=>{
        if(scrollPos>section.offsetTop && scrollPos <(section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')==link.getAttribute('href').substring(1)){
                   link.classList.add('active')
                }
            });
        }
    });
});