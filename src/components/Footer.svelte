<script>
  import { _ } from 'svelte-i18n'
</script>

<style>
  :root {
    --colr-primary: hsl(207, 100%, 34%);
    --colr-text: hsl(0, 0%, 25%);
    --colr-link: hsl(207, 100%, 34%);
  }
  footer {
    margin-bottom: 1rem;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    align-items: center;
    grid-gap: 2vw;
    font-size: 0.85rem;
    line-height: 1.35;
    border-top: 1px solid var(--colr-primary);
  }

  .devlogo,
  .devlogo:visited {
    color: hsl(0, 0%, 44%);
    fill: currentColor;
    width: 1.4rem;
  }

  .devlogo:hover,
  .devlogo:active,
  .devlogo:focus {
    color: hsl(0, 0%, 25%);
  }
</style>

<footer class="lo--center">
  <div>{$_('footer.disclaimer')}</div>
  <div>
    {$_('footer.experiment')}
    <a href="https://svelte.dev/">Svelte</a>
  </div>
  <div>
    <a href="https://github.com/halvorsanden/coaco">GitHub-repo</a>
    <br />
    {$_('footer.version')} 20200905
  </div>
  <div>
    <a
      class="devlogo noline"
      title="Developed by H.W. Sanden"
      href="http://8yd.no">
      <svg
        width="22.4"
        height="29.5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 224 295">
        <path
          d="M60.4 273.75a28.7 28.7 0 0035.16 20.3l27.72-7.44-26-97.02-55.44
          14.86 18.57 69.3zm142.32-23.28a28.7 28.7 0
          0020.3-35.15l-7.43-27.72-97.02 26 14.85 55.44 69.3-18.57zM121.3
          168.3l-14.86-55.44-97.02 26 14.85 55.44 97.03-26zm21.28
          24.01l55.44-14.85-29.7-110.89-55.45 14.86 29.71 110.88zM19.55
          121.28L75 106.44 49 9.41l-27.72 7.43A28.7 28.7 0 00.98 51.98l18.57
          69.3zM178.45 49l-7.43-27.72A28.7 28.7 0 00135.87.98l-69.3 18.57L81.43
          75l97.02-26z" />
      </svg>
    </a>
  </div>
</footer>
