<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>
  .inn {
    padding-top: 1em;
    padding-bottom: 1em;
  }
  .sjokoinfo {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
    justify-content: space-between;
    align-items: flex-end;
  }

  .sjokoinfo p {
    flex: 0 1 24%;
    width: 24%;
  }

  input,
  label {
    display: block;
  }

  .sjokoinfo input {
    background-color: hsl(0, 0%, 100%);
    color: hsl(207, 100%, 34%);
    width: 92%;
    padding: 3px 6px 4px;
    border: 0;
    border-bottom: 1px solid var(--colr-secondary);
    border-radius: 3px 3px 0 0;
    outline: none;
    height: 2em;
    font-size: 1rem;
    margin-bottom: 20px;
    box-shadow: none;
    box-sizing: content-box;
  }

  .sjokoinfo input:focus {
    padding: 3px 6px 3px;
    border-bottom: 2px solid hsl(207, 100%, 34%);
    transition: all 0.5s;
  }

  ::placeholder {
    color: hsl(207, 100%, 34%);
    opacity: 1; /* Firefox */
  }

  label {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.3em;
  }

  /* RESULT */
  .ut {
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-bottom: 4em;
  }

  .betar {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1em;
    width: 100%;
  }

  .resfigur {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
    width: 100%;
    padding: 1em 0;
  }

  .reschild {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 33%;
    width: 33%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 12px;
  }

  .resplate {
    flex-flow: row wrap;
  }

  .resrad {
    flex-flow: column nowrap;
  }

  .resrute {
    flex-flow: row wrap;
  }

  .sjokoplate {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    margin: 4px;
    background-color: hsl(10, 47%, 33%);
    padding: 2px;
    border-radius: 3px;
  }

  .sjokorad {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
  }

  .resrad > .sjokorad {
    margin: 3px;
  }

  .sjokorute {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    width: 24px;
    height: 34px;
    background: hsl(20, 79%, 16%)
      url("//8yd.no/assets/yard/labs/sjokolator/chock.png") no-repeat 0 0;
    background-size: cover;
    margin: 1px 0;
    box-sizing: content-box;
  }

  .resrute > .sjokorute {
    margin: 3px;
  }

  @media only screen and (max-width: 1024px) {
    .ut {
      box-sizing: border-box;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .sjokoinfo p {
      flex-basis: 48%;
      width: 48%;
    }

    .betar {
      font-size: 1.4rem;
    }

    .resfigur {
      flex-flow: column nowrap;
    }

    .reschild {
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;
      flex-basis: 100%;
      width: 100%;
      padding: 12px;
    }

    .resplate {
      flex-flow: row wrap;
    }

    .resrad {
      flex-flow: column nowrap;
    }

    .resrute {
      flex-flow: row wrap;
    }
  }

  @media only screen and (max-width: 500px) {
    .sjokoinfo {
      flex-flow: column nowrap;
    }

    .sjokoinfo p {
      flex-basis: 100%;
      width: 100%;
    }
  }
</style>

<Header />

<div class="inn lo--center">
  <form class="sjokoinfo">
    <p class="gram">
      <label for="gram">Hvor mange gram skal du ha?</label>
      <input
        name="gram"
        type="number"
        pattern="”[0-9]*”"
        min="1"
        max="1000"
        id="gram"
        data-lang="nb" />
    </p>

    <p class="platevekt">
      <label for="gram">Hvor mange gram veier en plate?</label>
      <input
        name="platevekt"
        type="number"
        pattern="”[0-9]*”"
        min="1"
        max="1000"
        id="platevekt"
        data-lang="nb" />
    </p>

    <p class="ruterirad">
      <label for="gram">Antall ruter per rad</label>
      <input
        name="ruterirad"
        type="number"
        min="1"
        max="10"
        id="ruterirad"
        data-lang="nb" />
    </p>

    <p class="rader">
      <label for="gram">Antall rader per plate</label>
      <input
        name="rader"
        type="number"
        pattern="”[0-9]*”"
        min="1"
        max="20"
        id="rader"
        data-lang="nb" />
    </p>
  </form>
</div>
<div class="ut lo--center">
  <p id="betar" class="betar" />
  <div id="resfigur" class="resfigur">
    <div id="resplate" class="reschild resplate" />
    <div id="resrad" class="reschild resrad" />
    <div id="resrute" class="reschild resrute" />
  </div>
</div>

<Footer />
