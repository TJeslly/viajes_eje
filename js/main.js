document.addEventListener("DOMContentLoaded",()=>{
const f=document.getElementById("form");
if(f){
f.addEventListener("submit",e=>{
e.preventDefault();
const r=document.getElementById("resultado");
r.textContent="Mensaje enviado correctamente";
});
}
});
