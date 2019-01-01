// 8 YARD LABS
// Codename: Chocolator
// 2019 8yd.no
// v 0.9.5
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
                  "Use the whole bar, actually.";
            }

            // flere ruter enn i en plate
            else if (ruterTot > ruterPrPlate) {
               biter.innerHTML =
                  `You need ${platerTot} bar${(platerTot === 1) ? ", " : "s, "}${raderOvPlater} row${(raderOvPlater === 1) ? " and " : "s and "}${ruterOvRaderOvPlater} square${(ruterOvRaderOvPlater === 1) ? ". " : "s. "}<br>Total: ${ruterTot} square${(ruterTot === 1) ? "." : "s."}`;
            }

            // færre enn 1 rute
            else if (ruterTot < 1) {
               biter.innerHTML =
                  "By my calculations, that's actually less than a whole square. That's either quite a big bar or a lousy recipe.";
            }

            // færre ruter enn i en rad
            else if (ruterTot < ruterPrRad) {
               biter.innerHTML =
                  `You'll need only ${ruterTot} square${(ruterTot === 1) ? "." : "s."}`;
            }

            // antall rader og biter fra 1 og oppover
            else {
               biter.innerHTML =
                  `You'll need ${raderTot} row${(raderTot === 1) ? " and " : "s and "}${ruterOvRader} square${(ruterOvRader === 1) ? "." : "s."}<br>Total: ${ruterTot} square${(ruterTot === 1) ? "." : "s."}`;
            }
         } else {
            biter.innerHTML =
               "The result will appear as soon as the form is complete.";
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