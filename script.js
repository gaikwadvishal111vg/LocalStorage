const textarea = document.getElementById("textarea");

let newTextarea = textarea.value;
textarea.addEventListener("keyup"  , () => {
     newTextarea = textarea.value ;
console.log(newTextarea);
localStorage.setItem( "value", newTextarea );
} );
window.addEventListener("load",()=>{
    textarea.innerText= localStorage.getItem('value');
})