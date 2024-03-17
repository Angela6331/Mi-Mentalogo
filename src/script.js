// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({once: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 800,
    delay: (el, i) => 100 * (i+1)
  })


 btnAbrirModal.addEventListener("click",e=>{
            ventanaModal.style.display = "block"
            return false
        })
btnCerrarModal.addEventListener("click",e=>{
            ventanaModal.style.display = "none"
            return false
        })


 btnAbrirModaldos.addEventListener("click",e=>{
            ventanaModaldos.style.display = "block"
            return false
        })
btnCerrarModaldos.addEventListener("click",e=>{
            ventanaModaldos.style.display = "none"
            return false
        })