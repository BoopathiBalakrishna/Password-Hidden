const search = document.querySelector("#search") ;
const eye = document.querySelector("#eye") ;

let password = true ;

eye.addEventListener("click",()=>{
     if(password)
     {
        search.setAttribute("type","text") ;
        password = false ;
        eye.classList.remove("fa-eye") ;
        eye.classList.add("fa-eye-slash") ;
     }
     else
     {
        search.setAttribute("type","password") ;
        password = true ;
        eye.classList.remove("fa-eye-slash") ;
        eye.classList.add("fa-eye") ;

     }
})