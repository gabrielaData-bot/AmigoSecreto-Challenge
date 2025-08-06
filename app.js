let amigos=[]
function agregarAmigos (){
    const input= document.getElementById('amigo');
    const nombre= input.value.trim();
    if(nombre===""){
        alert("Por favor, escribe un nombre válido.");
    }
    
    if(listaAmigos.includes(nombre)){
        alert("Este nombre ya está en la lista.");
        return;
    }
    listaAmigos.push(nombre);
    mostrarLista();
    input.value="";
}