<script>
  import Header from "./Header.svelte"
  import Footer from "./Footer.svelte"
  import { _ } from "svelte-i18n"

  let recipeWeight = null
  let barWeight = null
  let pcsPerRow = null
  let rowsPerBar = null

  let allValues = null
  let wholeBar = null

  let pcsPerBar = null
  let pcsExcRows = null
  let pcsExcBars = null
  let pcsExcRowsExcBars = null
  let pcsTotal = null

  let rowsExcBars = null
  let rowsTotal = null

  let barsTotal = null

  let pcsIndex
  let pcsFig = `<div class="choco-pcs"></div>`
  let pcsFigs

  let rowPcsIndex
  let rowPcsFig
  let rowIndex
  let rowFig
  let rowFigs

  let barPcsIndex
  let barPcsFig
  let barRowIndex
  let barRowFig
  let barRowFigs
  let barIndex
  let barFig
  let barFigs

  const compute = function() {
    pcsTotal = Math.round(recipeWeight / (barWeight / (rowsPerBar * pcsPerRow)))
    rowsTotal = Math.floor(pcsTotal / pcsPerRow)
    pcsPerBar = pcsPerRow * rowsPerBar
    pcsExcRows = pcsTotal - rowsTotal * pcsPerRow
    barsTotal = Math.floor(pcsTotal / (rowsPerBar * pcsPerRow))
    pcsExcBars = pcsTotal - barsTotal * (rowsPerBar * pcsPerRow)
    rowsExcBars = Math.floor(pcsExcBars / pcsPerRow)
    pcsExcRowsExcBars = pcsExcBars - rowsExcBars * pcsPerRow

    allValues =
      recipeWeight &&
      recipeWeight !== "0" &&
      (barWeight && barWeight !== "0") &&
      (pcsPerRow && pcsPerRow !== "0") &&
      (rowsPerBar && rowsPerBar !== "0")

    wholeBar = recipeWeight === barWeight || pcsTotal === rowsPerBar * pcsPerRow

    barFigs = ""
    barIndex = 0
    while (barIndex < barsTotal) {
      barRowFigs = ""
      barRowIndex = 0
      while (barRowIndex < rowsPerBar) {
        barPcsFig = ""
        barPcsIndex = 0
        while (barPcsIndex < pcsPerRow) {
          barPcsIndex++
          barPcsFig += pcsFig
        }
        barRowFig = `<div class="choco-row">${barPcsFig}</div>`
        barRowIndex++
        barRowFigs += barRowFig
      }
      barFig = `<div class="choco-bar">${barRowFigs}</div>`
      barIndex++
      barFigs += barFig
    }

    rowFigs = ""
    rowIndex = 0
    while (rowIndex < rowsExcBars) {
      rowPcsFig = ""
      rowPcsIndex = 0
      while (rowPcsIndex < pcsPerRow) {
        rowPcsIndex++
        rowPcsFig += pcsFig
      }
      rowFig = `<div class="choco-row">${rowPcsFig}</div>`
      rowIndex++
      rowFigs += rowFig
    }

    pcsFigs = ""
    pcsIndex = 0
    while (pcsIndex < pcsExcRowsExcBars) {
      pcsIndex++
      pcsFigs += pcsFig
    }
  }
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
  <div>
    <label for="recipe-weight">{$_('form.weight')}</label>
    <input
      on:change={compute}
      bind:value={recipeWeight}
      id="recipe-weight"
      name="recipe-weight"
      type="number"
      pattern="”[0-9]*”"
      min="1"
      max="1000" />
  </div>
  <div>
    <label for="bar-weight">{$_('form.barweight')}</label>
    <input
      on:change={compute}
      bind:value={barWeight}
      id="bar-weight"
      name="bar-weight"
      type="number"
      pattern="”[0-9]*”"
      min="1"
      max="1000" />
  </div>
  <div>
    <label for="pcs-row">{$_('form.pcsrow')}</label>
    <input
      on:change={compute}
      bind:value={pcsPerRow}
      id="pcs-row"
      name="pcs-row"
      type="number"
      min="1"
      max="10" />
  </div>
  <div>
    <label for="rows">{$_('form.rows')}</label>
    <input
      on:change={compute}
      bind:value={rowsPerBar}
      id="rows"
      name="rows"
      type="number"
      pattern="”[0-9]*”"
      min="1"
      max="20" />
  </div>
</form>

<div class="output lo--center">
  <p class="result--text">
    {#if !allValues}
      {$_('result.whenall')}
    {:else if wholeBar}
      {$_('result.wholebar')}
    {:else if pcsTotal > pcsPerBar}
      {$_('result.youneed')} {barsTotal}
      {$_('result.bars', { values: { n: barsTotal } })}, {rowsExcBars}
      {$_('result.rows', { values: { n: rowsExcBars } })} {$_('result.and')}
      {pcsExcRowsExcBars}
      {$_('result.squares', { values: { n: pcsExcRowsExcBars } })}.
      <br />
      {$_('result.total')} {pcsTotal}
      {$_('result.squares', { values: { n: pcsTotal } })}.
    {:else if pcsTotal < 1}
      {$_('result.bad')}
    {:else if pcsTotal < pcsPerRow}
      {$_('result.youneed')} {$_('result.only')} {pcsTotal}
      {$_('result.squares', { values: { n: pcsTotal } })}.
    {:else}
      {$_('result.youneed')} {rowsTotal}
      {$_('result.rows', { values: { n: rowsTotal } })} {$_('result.and')}
      {pcsExcRows} {$_('result.squares', { values: { n: pcsExcRows } })}.
      <br />
      {$_('result.total')} {pcsTotal}
      {$_('result.squares', { values: { n: pcsTotal } })}.
    {/if}
  </p>
  {#if allValues}
    <div class="result--fig">
      {#if barFigs}
        <div class="result--figwrapper fig--bar">
          {@html barFigs}
        </div>
      {/if}
      {#if rowFigs}
        <div class="result--figwrapper fig--row">
          {@html rowFigs}
        </div>
      {/if}
      {#if pcsFigs}
        <div class="result--figwrapper fig--pcs">
          {@html pcsFigs}
        </div>
      {/if}
    </div>
  {/if}
</div>

<Footer />
