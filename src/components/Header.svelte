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

  @media only screen and (max-width: 500px) {
    .sprog {
      order: 1;
      flex: 1 0 100%;
    }

    .logo {
      order: 2;
    }
  }
</style>

<div class="hode lo--center">
  <div class="logo">
    <img
      src="http://8yd.no/assets/yard/labs/sjokolator/sjokologo.svg?v=201905191900"
      alt="Sjokolator" />
  </div>
  <div class="sprog">
    Norsk |
    <a href="chocolator">English</a>
  </div>
  <div class="intro">
    <p class="introtext">
      Regn om sjokolade fra vekt til biter. Fyll ut alle feltene, resten gjør
      sjokolatoren for deg.
    </p>
  </div>
</div>
