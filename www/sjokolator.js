// 8 YARD LABS
// Codename: Sjokolator
// 2018 8yd.no
// v 0.9
/*jslint browser*/

const inputs = document.querySelectorAll("input[type=number]");

function compute() {
   "use strict";

   let timeout = null;
   clearTimeout(timeout);
   timeout = setTimeout(function () {

      const gram = document.getElementById("gram").value;
      const platevekt = document.getElementById("platevekt").value;
      const ruterPrRad = document.getElementById("ruterirad").value;
      const raderPrPlate = document.getElementById("rader").value;

      // Ruter totalt
      const ruterTot = Math.round(gram / (platevekt / (raderPrPlate * ruterPrRad)));
      // Rader totalt
      const raderTot = Math.floor(ruterTot / ruterPrRad);
      // Ruter pr plate
      const ruterPrPlate = ruterPrRad * raderPrPlate;
      // Overskytende ruter fra radene
      const ruterOvRader = ruterTot - (raderTot * ruterPrRad);
      // Plater totalt
      const platerTot = Math.floor(ruterTot / (raderPrPlate * ruterPrRad));
      // Overskytende ruter fra platene
      const ruterOvPlater = ruterTot - (platerTot * (raderPrPlate * ruterPrRad));
      // Overskytende rader fra platene
      const raderOvPlater = Math.floor(ruterOvPlater / ruterPrRad);
      // Overskytende ruter fra overskytende rader fra platene
      const ruterOvRaderOvPlater = ruterOvPlater - (raderOvPlater * ruterPrRad);

      const biter = document.getElementById("betar");

      function renderText() {
         // når alle felter er fylt ut
         if ((gram && gram !== "0") && (platevekt && platevekt !== "0") && (ruterPrRad && ruterPrRad !== "0") && (raderPrPlate && raderPrPlate !== "0")) {

            // like mye som i en plate eller like mange ruter totalt som i en plate
            if (gram === platevekt || ruterTot === (raderPrPlate * ruterPrRad)) {
               biter.innerHTML =
                  "Her må du bruke hele platen.";
            }

            // flere ruter enn i en plate
            else if (ruterTot > ruterPrPlate) {
               biter.innerHTML =
                  `Du trenger ${platerTot} plate${(platerTot === 1) ? ", " : "r, "}${raderOvPlater} rad${(raderOvPlater === 1) ? " og " : "er og "}${ruterOvRaderOvPlater} rute${(ruterOvRaderOvPlater === 1) ? ". " : "r. "}<br>Totalt ${ruterTot} rute${(ruterTot === 1) ? "." : "r."}`;
            }

            // færre enn 1 rute
            else if (ruterTot < 1) {
               biter.innerHTML =
                  "Nå blir resultatet mindre enn en hel rute. Ser ut som du har en sjokolade med kjempestore ruter eller en dårlig oppskrift. Er en oppskrift som krever mindre enn en hel sjokoladebit noe å bry med?";
            }

            // færre ruter enn i en rad
            else if (ruterTot < ruterPrRad) {
               biter.innerHTML =
                  `Du trenger bare ${ruterTot} rute${(ruterTot === 1) ? "." : "r."}`;
            }

            // antall rader og biter fra 1 og oppover
            else {
               biter.innerHTML =
                  `Du trenger ${raderTot} rad${(raderTot === 1) ? " og " : "er og "}${ruterOvRader} rute${(ruterOvRader === 1) ? "." : "r."}<br>Totalt ${ruterTot} rute${(ruterTot === 1) ? "." : "r."}`;
            }

         } else {
            biter.innerHTML =
               "Resultatet kommer når alle feltene er utfylt.";
         }
      }

      function renderFig() {

         //const figur = document.getElementById("resfigur");

         // når alle felter er fylt ut
         if ((gram && gram !== "0") && (platevekt && platevekt !== "0") && (ruterPrRad && ruterPrRad !== "0") && (raderPrPlate && raderPrPlate !== "0")) {


            // PLATEFIGUR
            let figPlate = document.getElementById("resplate");
            let figRad = document.getElementById("resrad");
            let figRute = document.getElementById("resrute");

            while (figPlate.hasChildNodes()) {
               figPlate.removeChild(figPlate.firstChild);
            }

            let plateDivInd = 0;
            while (plateDivInd < platerTot) {

               let fpRadDiv = "";
               let fpRadDivInd = 0;
               while (fpRadDivInd < raderPrPlate) {

                  let fpRuteDiv = "";
                  let fpRuteDivInd = 0;
                  while (fpRuteDivInd < ruterPrRad) {
                     fpRuteDivInd++;
                     fpRuteDiv += `<div class="sjokorute"></div>`;
                  }

                  fpRadDivInd++;
                  fpRadDiv += `<div class="sjokorad">${fpRuteDiv}</div>`;
               }

               plateDivInd++;
               figPlate.innerHTML += `<div class="sjokoplate">${fpRadDiv}</div>`;
            }

            // RADFIGUR
            while (figRad.hasChildNodes()) {
               figRad.removeChild(figRad.firstChild);
            }

            let radDivInd = 0;
            while (radDivInd < raderOvPlater) {

               let frRuteDiv = "";
               let frRuteDivInd = 0;
               while (frRuteDivInd < ruterPrRad) {
                  frRuteDivInd++;
                  frRuteDiv += `<div class="sjokorute"></div>`;
               }

               radDivInd++;
               figRad.innerHTML += `<div class="sjokorad">${frRuteDiv}</div>`;
            }

            // RUTEFIGUR
            while (figRute.hasChildNodes()) {
               figRute.removeChild(figRute.firstChild);
            }

            let ruteDivInd = 0;
            while (ruteDivInd < ruterOvRaderOvPlater) {
               ruteDivInd++;
               figRute.innerHTML += `<div class="sjokorute"></div>`;
            }
         }
      }

      renderText();
      renderFig();

   }, 500);
}

inputs.forEach((item) => item.addEventListener("change", compute));
inputs.forEach((item) => item.addEventListener("keyup", compute));