const boton = document.getElementById("btn");

boton.addEventListener("click", ()=> {
    let comentarios = document.getElementById("comentario").value;
    document.getElementById("comentario").value="";
    const twiteado = document.getElementById("twiteado");
    const nuevosComentarios = document.createElement("div");
    const contenedorElemento = document.createElement("p");
  let textNuevoComentario = document.createTextNode(comentarios);
  contenedorElemento.appendChild(textNuevoComentario);
  nuevosComentarios.appendChild(contenedorElemento);
  twiteado.appendChild(nuevosComentarios);
//No entiendo por que no me funciona, más tarde seguiré intentando
})