let valmyndOpin = false;
const valmyndartakki = document.getElementById("valmyndartakki");
const valmynd = document.getElementById("valmynd");
const adalpartur = document.getElementById("adalpartur");

const heim = document.getElementById("heim");
const umMig = document.getElementById("umMig");
const ferilskra = document.getElementById("ferilskra");

let nuverandiSida = heim;

endurhladaSiduna();

function endurhladaSiduna() {
  const sidastaSidaId = sessionStorage.getItem("sidaId");

  if (sidastaSidaId) {
    [heim, umMig, ferilskra].forEach(section => {
      if (section.id === sidastaSidaId) {
        skiptaUmSidu(section);
      }
    });
  }
}

// function opnaLokaValmynd() {
//   if (valmyndOpin) {
//     lokaValmynd();
//   }
//   else {
//     opnaValmynd();
//   }
// }

// function lokaValmynd() {
//   valmyndOpin = false;
//   valmyndartakki.classList = "fa fa-bars fa-3x";
//   valmynd.style.display = "none";
//   adalpartur.style.opacity = "1.0";
// }

// function opnaValmynd() {
//   valmyndOpin = true;
//   valmyndartakki.classList = "fa fa-times fa-3x";
//   valmynd.style.display = "flex";
//   adalpartur.style.opacity = "0.2";
// }

function skiptaUmSidu(nySida) {
  if (nuverandiSida !== nySida) {
    nuverandiSida.style.display = "none";
    nySida.style.display = "block";
    nuverandiSida = nySida;
  }
  // lokaValmynd();

  sessionStorage.setItem("sidaId", nuverandiSida.id);
}

function synaHeim() {
  skiptaUmSidu(heim);
}

function synaUmMig() {
  skiptaUmSidu(umMig);
}

function synaFerilskra() {
  skiptaUmSidu(ferilskra);
}