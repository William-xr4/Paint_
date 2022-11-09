var evento_mouse ="";
var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var cor = "rgb(0, 119, 255)";
var largura = 5;
var raio = 2;
var ultima_pos_x, ultima_pos_y;

canvas.addEventListener("mousedown", mouse_baixo);
function mouse_baixo(evento){
    cor =document.getElementById("cor").value;
    largura =document.getElementById("largura").value;
    raio =document.getElementById("raio").value;

    evento_mouse = "mouse para baixo";

}

canvas.addEventListener("click", mouse_click);
function mouse_click(evento){
    cor =document.getElementById("cor").value;
    largura =document.getElementById("largura").value;
    raio =document.getElementById("raio").value;

    var pos_x = evento.clientX-canvas.offsetLeft;
    var pos_y = evento.clientY-canvas.offsetTop;
   
    contexto.beginPath();
    contexto.strokeStyle = cor;
    contexto.lineWidth = largura;
    contexto.arc(pos_x, pos_y, raio, 0, 360);
    contexto.stroke();
}

canvas.addEventListener("mouseup", mouse_cima);
function mouse_cima(){
    evento_mouse = "mouse para cima";
}
canvas.addEventListener("mouseleave", mouse_sai);
function mouse_sai(){
    evento_mouse ="mouse sai";
}
canvas.addEventListener("mousemove",mouse_move);
function mouse_move(evento){
    var pos_x = evento.clientX-canvas.offsetLeft;
    var pos_y = evento.clientY-canvas.offsetTop;

    if (evento_mouse == "mouse para baixo"){
        contexto.beginPath();
        contexto.strokeStyle = cor;
        contexto.lineWidth = largura;
        contexto.moveTo(ultima_pos_x, ultima_pos_y);
        contexto.lineTo(pos_x, pos_y);
        contexto.stroke();
    }
    
    ultima_pos_x = pos_x;
    ultima_pos_y = pos_y;
}
function Apagar(){
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);
}
function Circulo(){
    var evento_mouse = "Círculo";
    console.log(evento_mouse);
}