let showmenu = document.querySelector('.show-menue')
let menue = document.querySelector('.menue')
let arrowiconleft = document.querySelector('.icone')
let arrowicondown = document.querySelector('.iconedown')
let arrowleft = arrowiconleft.src = ("./arrows (1).png")

showmenu.addEventListener('click', function(){
   menue.classList.toggle("show")
 
 
   if (arrowiconleft.style.display !== 'none') {
    arrowiconleft.style.display = 'none';
    arrowicondown.style.display = 'block';
} else {
    arrowiconleft.style.display = 'block';
    arrowicondown.style.display = 'none';
}
    
})

