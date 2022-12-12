const btnMenu = document.querySelector('button.menu-btn');
const menuUl = document.querySelector('div.mobile-menu');
var flag = true;

btnMenu.addEventListener('click', ()=>{
    if(flag==true){
        menuUl.classList.remove('invisible');
        menuUl.classList.add('visible'); 
        flag=false;
    }else{
        menuUl.classList.remove('visible');
        menuUl.classList.add('invisible'); 
        flag=true;
    }
})