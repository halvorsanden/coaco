<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { _ } from "svelte-i18n";

  let gram = null;
  let platevekt = null;
  let ruterPrRad = null;
  let raderPrPlate = null;
  let ruterTot = null;
  let raderTot = null;
  let ruterPrPlate = null;
  let ruterOvRader = null;
  let platerTot = null;
  let ruterOvPlater = null;
  let raderOvPlater = null;
  let ruterOvRaderOvPlater = null;
  let allValues = null;
  let wholeBar = null;

  let ruteDivInd;
  let ruteFig = `<div class="sjokorute"></div>`;
  let ruteFigs;

  let frRuteFig;
  let frRuteDivInd;
  let radDivInd;
  let radFig;
  let radFigs;

  let fpRadFigs;
  let fpRadDivInd;
  let fpRuteFig;
  let fpRuteDivInd;
  let fpRadFig;
  let plateDivInd;
  let plateFig;
  let plateFigs;

  const compute = function() {
    // Ruter totalt
    ruterTot = Math.round(gram / (platevekt / (raderPrPlate * ruterPrRad)));
    // Rader totalt
    raderTot = Math.floor(ruterTot / ruterPrRad);
    // Ruter pr plate
    ruterPrPlate = ruterPrRad * raderPrPlate;
    // Overskytende ruter fra radene
    ruterOvRader = ruterTot - raderTot * ruterPrRad;
    // Plater totalt
    platerTot = Math.floor(ruterTot / (raderPrPlate * ruterPrRad));
    // Overskytende ruter fra platene
    ruterOvPlater = ruterTot - platerTot * (raderPrPlate * ruterPrRad);
    // Overskytende rader fra platene
    raderOvPlater = Math.floor(ruterOvPlater / ruterPrRad);
    // Overskytende ruter fra overskytende rader fra platene
    ruterOvRaderOvPlater = ruterOvPlater - raderOvPlater * ruterPrRad;

    allValues =
      gram &&
      gram !== "0" &&
      (platevekt && platevekt !== "0") &&
      (ruterPrRad && ruterPrRad !== "0") &&
      (raderPrPlate && raderPrPlate !== "0");

    wholeBar = gram === platevekt || ruterTot === raderPrPlate * ruterPrRad;

    // figures
    plateFigs = "";
    plateDivInd = 0;
    while (plateDivInd < platerTot) {
      fpRadFigs = "";
      fpRadDivInd = 0;
      while (fpRadDivInd < raderPrPlate) {
        fpRuteFig = "";
        fpRuteDivInd = 0;
        while (fpRuteDivInd < ruterPrRad) {
          fpRuteDivInd++;
          fpRuteFig += ruteFig;
        }
        fpRadFig = `<div class="sjokorad">${fpRuteFig}</div>`;
        fpRadDivInd++;
        fpRadFigs += fpRadFig;
      }
      plateFig = `<div class="sjokoplate">${fpRadFigs}</div>`;
      plateDivInd++;
      plateFigs += plateFig;
    }

    radFigs = "";
    radDivInd = 0;
    while (radDivInd < raderOvPlater) {
      frRuteFig = "";
      frRuteDivInd = 0;
      while (frRuteDivInd < ruterPrRad) {
        frRuteDivInd++;
        frRuteFig += ruteFig;
      }
      radFig = `<div class="sjokorad">${frRuteFig}</div>`;
      radDivInd++;
      radFigs += radFig;
    }

    ruteFigs = "";
    ruteDivInd = 0;
    while (ruteDivInd < ruterOvRaderOvPlater) {
      ruteDivInd++;
      ruteFigs += ruteFig;
    }
  };
</script>

<style>
  :root {
    --colr-primary: hsl(207, 100%, 34%);
    --colr-text: hsl(0, 0%, 25%);
    --colr-link: hsl(207, 100%, 34%);
  }

  .inputs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    grid-gap: 1rem;
    align-items: flex-end;
    margin-bottom: 2rem;
  }

  input,
  label {
    display: block;
  }

  .inputs input {
    background-color: hsl(0, 0%, 100%);
    width: 92%;
    padding: 0.35rem;
    border: 0;
    border-bottom: 1px solid var(--colr-primary);
    border-radius: 0.2rem 0.2rem 0 0;
    outline: none;
    font-size: 1rem;
    box-shadow: none;
    box-sizing: content-box;
  }

  .inputs input:focus {
    padding-bottom: calc(0.35rem - 2px);
    border-bottom: 3px solid var(--colr-primary);
  }

  label {
    font-size: 0.9rem;
    font-weight: 550;
    margin-bottom: 0.3em;
  }

  .output {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  .result--text {
    font-size: calc(0.83rem + 1vmin);
    margin-bottom: 2rem;
    width: 100%;
  }

  .result--fig {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    width: 100%;
  }

  .result--figwrapper {
    flex: 1 1 14rem;
    display: flex;
    padding: 0.8rem;
  }

  .fig--bar {
    flex-flow: row wrap;
    align-content: center;
    align-items: flex-start;
  }

  .fig--row {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
  }

  .fig--pcs {
    flex-flow: row wrap;
    align-content: center;
    align-items: flex-start;
  }
</style>

<Header />

<form class="inputs lo--center">
  <div class="gram">
    <label for="gram">{$_('form.weight')}</label>
    <input
      on:change={compute}
      bind:value={gram}
      name="gram"
      type="number"
      pattern="”[0-9]*”"
      min="1"
      max="1000"
      data-lang="nb" />
  </div>
  <div class="platevekt">
    <label for="gram">{$_('form.barweight')}</label>
    <input
      on:change={compute}
      bind:value={platevekt}
      name="platevekt"
      type="number"
      pattern="”[0-9]*”"
      min="1"
      max="1000"
      data-lang="nb" />
  </div>
  <div class="ruterirad">
    <label for="gram">{$_('form.pcsrow')}</label>
    <input
      on:change={compute}
      bind:value={ruterPrRad}
      name="ruterirad"
      type="number"
      min="1"
      max="10"
      data-lang="nb" />
  </div>
  <div class="rader">
    <label for="gram">{$_('form.rows')}</label>
    <input
      on:change={compute}
      bind:value={raderPrPlate}
      name="rader"
      type="number"
      pattern="”[0-9]*”"
      min="1"
      max="20"
      data-lang="nb" />
  </div>
</form>

<div class="output lo--center">
  <p class="result--text">
    {#if !allValues}
      {$_('result.whenall')}
    {:else if wholeBar}
      {$_('result.wholebar')}
    {:else if ruterTot > ruterPrPlate}
      {$_('result.youneed')} {platerTot} {$_('result.bars', { n: platerTot })}, {raderOvPlater}
      {$_('result.rows', { n: raderOvPlater })} {$_('result.and')}
      {ruterOvRaderOvPlater} {$_('result.squares', { n: ruterOvRaderOvPlater })}.
      <br />
      {$_('result.total')} {ruterTot} {$_('result.squares', { n: ruterTot })}.
    {:else if ruterTot < 1}
      {$_('result.bad')}
    {:else if ruterTot < ruterPrRad}
      {$_('result.youneed')} {$_('result.only')} {ruterTot}
      {$_('result.squares', { n: ruterTot })}.
    {:else}
      {$_('result.youneed')} {raderTot} {$_('result.rows', { n: raderTot })}
      {$_('result.and')} {ruterOvRader}
      {$_('result.squares', { n: ruterOvRader })}.
      <br />
      {$_('result.total')} {ruterTot} {$_('result.squares', { n: ruterTot })}.
    {/if}
  </p>
  {#if allValues}
    <div class="result--fig">
      {#if plateFigs}
        <div class="result--figwrapper fig--bar">
          {@html plateFigs}
        </div>
      {/if}
      {#if radFigs}
        <div class="result--figwrapper fig--row">
          {@html radFigs}
        </div>
      {/if}
      {#if ruteFigs}
        <div class="result--figwrapper fig--pcs">
          {@html ruteFigs}
        </div>
      {/if}
    </div>
  {/if}
</div>

<Footer />
