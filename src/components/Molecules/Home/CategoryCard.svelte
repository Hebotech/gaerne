<script>
  import { navigate } from 'svelte-routing';
  export let card;
</script>

<style>
  .col {
    flex-basis: 27%;
    margin: 2%;
    padding: 10%;
    color: white;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .col:last-of-type {
    flex-basis: 100%;
    padding: 10%;
    max-height: none;
  }

  .main-btn {
    font-family: Open sans;
    font-weight: 700;
    text-transform: uppercase;
    color: #333333;
    background-color: #f5d315;
    border-color: transparent;
    padding: 2% 14%;
    transition: all 0.3s ease-in;
  }

  .main-btn:hover {
    background-color: transparent;
    border: solid 3px #f5d315;
    transition: all 0.3s ease-out;
    color: white;
  }

  @media screen and (min-width: 550px) {
    .col {
      padding: 7%;
    }
    .col:last-of-type {
      max-height: none;
      padding: 10%;
    }
  }

  @media screen and (min-width: 770px) {
    .col {
      padding: 10%;
    }
    .col:last-of-type {
      padding: 10%;
      max-height: 5em;
    }
  }
</style>

<div
  class="col justify-content-center d-flex align-items-center"
  style={`background-image: radial-gradient(circle, rgba(0,0,0,0.6) 05%, rgba(0,0,0,0.0) 100%),url(${card.image})`}>
  <div>
    <h5>{card.name}</h5>
    <p>{card.description}</p>
    <button
      class="main-btn"
      on:click={() => navigate(`/categoria/${card.name}`)}>
      Ir ahora
    </button>
  </div>
</div>
