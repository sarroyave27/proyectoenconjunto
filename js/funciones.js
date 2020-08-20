document.getElementById('btn').addEventListener('click',function(){
    var webpage = document.createElement('a');
    var texto = document.getElementById('pgwb').value;
    var posicion = document.getElementById('posicion');
    webpage.href = texto;
    webpage.value = "ingresa";
    posicion.appendChild(webpage);
})