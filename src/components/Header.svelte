<script>
  import { locale, _ } from "svelte-i18n";
  $: oppositeLocale = $locale === 'nb' ? 'en' : 'nb'
</script>

<style>
  .hode {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 1em;
    margin-bottom: 4em;
  }

  .sprog {
    flex: 0 1 auto;
    margin-bottom: 1.5em;
    font-size: 0.9rem;
  }

  .logo {
    flex: 0 1 10em;
    margin-bottom: 1.6em;
  }

  .intro {
    flex: 1 0 100%;
    order: 3;
  }

  .introtext {
    max-width: 900px;
    font-size: 1.5rem;
    line-height: 1.35em;
  }

  @media only screen and (max-width: 768px) {
    .hode {
      margin-bottom: 2em;
    }

    .introtext {
      font-size: 1.1rem;
    }
  }
</style>

<div class="hode lo--center">
  <div class="logo">
    <img
      src="http://8yd.no/assets/yard/labs/sjokolator/{$_('intro.logo')}.svg?v=201905191900"
      alt="{$_('intro.title')}" />
  </div>
  <div class="sprog">
  <button on:click={() => locale.set(oppositeLocale)}>
  {$_('switch.lang', null, oppositeLocale)}</button>
  </div>
  <div class="intro">
    <p class="introtext">
      {$_('intro.message')}
    </p>
  </div>
</div>
