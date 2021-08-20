canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
// old code
var mousevent = ""
canvas.addEventListener("mousedown", md)
canvas.addEventListener("mouseup", mp)
canvas.addEventListener("mousemove", mm)
canvas.addEventListener("mouseleave", ml)
var color = "black"
var laspositionx, laspositiony
function md(et) {
    mousevent = "MD"
}
function mp(et) {
    mousevent = "MP"
}
function mm(et) {
    x = et.clientX - canvas.offsetLeft
    y = et.clientY - canvas.offsetTop
    if (mousevent == "MD") {
        ctx.beginPath();
        ctx.linewidth = 2;
        ctx.strokeStyle = color;
        ctx.arc(x,y,50,0,2*Math.PI)
        ctx.stroke()
    }
    laspositionx = x
    laspositiony = y
}
function ml(et) {
    mousevent = "ML"
}
// end of old code