<script>
  import { locale, _ } from "svelte-i18n";
  $: oppositeLocale = $locale === "nb" ? "en" : "nb";
</script>

<style>
  header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2vh;
    margin-bottom: calc(1rem + 2vw);
  }

  .locale {
    flex: 0 1 auto;
    margin-bottom: 1vh;
    border: 1px solid hsl(0, 0%, 65%);
    border-radius: 0.2em;
    background-color: hsl(0, 0%, 80%);
    padding: 0.2em 0.6em 0.3em;
  }

  .locale:hover,
  .locale:active,
  .locale:focus {
    background-color: hsl(0, 0%, 85%);
  }

  .logo {
    flex: 0 1 10rem;
    margin-bottom: 2vw;
  }

  .intro {
    flex: 1 0 100%;
    order: 3;
  }

  .introtext {
    max-width: 60ch;
    font-size: calc(1rem + 1vmin);
    line-height: 1.35;
  }
</style>

<header class="hode lo--center">
  <img
    class="logo"
    src="http://8yd.no/assets/yard/labs/sjokolator/{$_('intro.logo')}.svg?v=201905191900"
    alt={$_('intro.title')} />
  <button class="locale" on:click={() => locale.set(oppositeLocale)}>
    {$_('switch.lang', null, oppositeLocale)}
  </button>
  <div class="intro">
    <p class="introtext">{$_('intro.message')}</p>
  </div>
</header>
