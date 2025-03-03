let btnJouer = document.querySelector(".jouer")
let containerGame = document.querySelector(".container__game")
let containerGamePuit = document.querySelector(".container__gamePuit")
let btns = containerGame.querySelectorAll(".container__btnGame button")
let btnsPuit = containerGamePuit.querySelectorAll(".container__btnGame button")
let statut = document.querySelector(".status")
let popMessage
let ordi = document.querySelector(".ptsOrdi")
let moi = document.querySelector(".ptsMoi")
let ptsOC = containerGame.querySelector(".ptsOrdi span")
let ptsMC = containerGame.querySelector(".ptsMoi span")
let ptsMoiC = parseFloat(ptsMC.textContent , 10)
let ptsOrdiC = parseFloat(ptsOC.textContent , 10)
let ptsOP = containerGamePuit.querySelector(".ptsOrdi span")
let ptsMP = containerGamePuit.querySelector(".ptsMoi span")
let ptsMoiP = parseFloat(ptsMP.textContent , 10)
let ptsOrdiP = parseFloat(ptsOP.textContent , 10)
let btnReset = document.querySelector(".reset button")
let btnsSelect = document.querySelectorAll(".select--game button")
let containerSelectGame = document.querySelector(".select--game")
let btnModeClassique = document.querySelector(".divBtnSelectClassique button")
let btnModePuit = document.querySelector(".divBtnSelectPuit button")
console.log(btns.length);

btnJouer.addEventListener("click", toggleGame)
btnReset.addEventListener("click" , resetGame)


btnsSelect.forEach((btn , key) => btn.addEventListener("click" , () =>{
  if (key === 0){
    containerGame.classList.remove("none")
    containerGame.classList.add("active")
    btnModeClassique.classList.add("active")
    btnModePuit.classList.add("active")
  }else{
    containerGamePuit.classList.remove("none")
    containerGamePuit.classList.add("active")
    btnModeClassique.classList.add("active")
    btnModePuit.classList.add("active")
  }
}))

btns.forEach(btn => btn.addEventListener("mouseenter" ,() =>{
  btn.style.transform = "scale(1.2)"
  btn.style.transition = "transform 0.2s ease-out"
}))
btns.forEach(btn => btn.addEventListener("mouseleave" ,() =>{
  btn.style.transform = "scale(1)"
  btn.style.transition = "transform 0.2s ease-out"
}))


btns.forEach(btn => btn.addEventListener("click", () => {
  let choixOrid = Math.floor(Math.random() * 3) + 1
  let elmtSelectOrdi;
  if (choixOrid === 1) {
    elmtSelectOrdi = btns[0].textContent
  } else if (choixOrid === 2) {
    elmtSelectOrdi = btns[1].textContent
  } else {
    elmtSelectOrdi = btns[2].textContent
  }
  let elmtSelecMoi = btn.textContent
  winConditionVerifClassique(elmtSelecMoi, elmtSelectOrdi)
  if(ptsOrdiC === 3 || ptsMoiC === 3){
    statut.textContent = ""
    statut.textContent = `La partie est terminé. Le gagnant est : ${ptsOrdiC === 3 ? ordi.textContent : moi.textContent}`
    btnReset.classList.add("active")
    btns.forEach(btn2 => btn2.disabled = true)
  }
}))

function toggleGame() {
  btnJouer.classList.add("active")
  containerSelectGame.classList.add("active")
  setTimeout(() => {
    btnJouer.textContent = "Reinitialiser"
  }, 1000);
  // afficherMessage('Tu peux commencer à jouer !')
}

function afficherMessage(message) {
  statut.textContent = message
  statut.style.opacity = "1"
  clearTimeout(popMessage)
  popMessage = setTimeout(() => {
    statut.style.opacity = "0"
  }, 2000);
}

function winConditionVerifClassique(elmt1, elmt2) {
  let winElmt1 = false
  let winElmt2 = false
  if ((elmt1 === btns[0].textContent && elmt2 === btns[2].textContent) || (elmt1 === btns[1].textContent && elmt2 === btns[0].textContent) || (elmt1 === btns[2].textContent && elmt2 === btns[1].textContent)) {
    ptsMoiC ++
    ptsMC.textContent = ptsMoiC
    winElmt1 = true
    afficherMessage(`${elmt1} VS ${elmt2}. Bien joué tu as gagné la manche !`)
  } else if (elmt1 === elmt2) {
    afficherMessage(`${elmt1} VS ${elmt2}. Match nul !`)
  } else {
    ptsOrdiC ++
    ptsOC.textContent = ptsOrdiC
    winElmt2 = true
    afficherMessage(`${elmt1} VS ${elmt2}. Tu as perdu la manche.`)
  }
}
function winConditionVerifPuit(elmt1, elmt2) {
  let winElmt1 = false
  let winElmt2 = false
  if ((elmt1 === btnsPuit[0].textContent && elmt2 === btnsPuit[2].textContent) || (elmt1 === btnsPuit[1].textContent && (elmt2 === btnsPuit[0].textContent || elmt2 === btnsPuit[3].textContent)) || (elmt1 === btnsPuit[2].textContent && elmt2 === btnsPuit[1].textContent) || (elmt1 === btnsPuit[3].textContent && (elmt2 === btnsPuit[0].textContent || elmt2 === btnsPuit[2].textContent))){
    ptsMoiP ++
    ptsMP.textContent = ptsMoiP
    winElmt1 = true
    afficherMessage(`${elmt1} VS ${elmt2}. Bien joué tu as gagné la manche !`)
  } else if (elmt1 === elmt2) {
    afficherMessage(`${elmt1} VS ${elmt2}. Match nul !`)
  } else {
    ptsOrdiP ++
    ptsOP.textContent = ptsOrdiP
    winElmt2 = true
    afficherMessage(`${elmt1} VS ${elmt2}. Tu as perdu la manche.`)
  }
}

function resetGame (){
  ptsMoiC = 0
  ptsOrdiC = 0
  ptsMC.textContent = "0"
  ptsOC.textContent = "0"
  ptsMoiP = 0
  ptsOrdiP = 0
  ptsMP.textContent = "0"
  ptsOP.textContent = "0"
  btns.forEach(btn => btn.disabled = false)
  btnsPuit.forEach(btn2 => btn2.disabled = false)
  btnReset.classList.remove("active")
  containerGame.classList.contains("active") ? containerGame.classList.remove("active") : containerGamePuit.classList.remove("active")
  btnModeClassique.classList.remove("active")
  btnModePuit.classList.remove("active")
  // afficherMessage('Tu peux commencer à jouer !')
}


btnsPuit.forEach(btn => btn.addEventListener("mouseenter" ,() =>{
  btn.style.transform = "scale(1.2)"
  btn.style.transition = "transform 0.2s ease-out"
}))
btnsPuit.forEach(btn => btn.addEventListener("mouseleave" ,() =>{
  btn.style.transform = "scale(1)"
  btn.style.transition = "transform 0.2s ease-out"
}))


btnsPuit.forEach(btn => btn.addEventListener("click", () => {
  let choixOridPuit = Math.floor(Math.random() * 4) + 1
  let elmtSelectOrdiPuit;
  if (choixOridPuit === 1) {
    elmtSelectOrdiPuit = btnsPuit[0].textContent
  } else if (choixOridPuit === 2) {
    elmtSelectOrdiPuit = btnsPuit[1].textContent
  } else if(choixOridPuit === 3) {
    elmtSelectOrdiPuit = btnsPuit[2].textContent
  }else{
    elmtSelectOrdiPuit = btnsPuit[3].textContent
  }
  let elmtSelecMoiPuit = btn.textContent
  winConditionVerifPuit(elmtSelecMoiPuit, elmtSelectOrdiPuit)
  if(ptsOrdiP === 3 || ptsMoiP === 3){
    statut.textContent = ""
    statut.textContent = `La partie est terminé. Le gagnant est : ${ptsOrdiP === 3 ? ordi.textContent : moi.textContent}`
    btnReset.classList.add("active")
    btnsPuit.forEach(btn2 => btn2.disabled = true)
  }
}))

