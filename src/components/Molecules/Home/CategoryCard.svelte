<script>
  import { navigate } from 'svelte-routing';
  export let card;
</script>

<style>
  .col {
    flex-basis: 27%;
    margin: 2%;
    padding: 2%;
    color: white;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .col:last-of-type {
    flex-basis: 100%;
    padding: 10%;
    max-height: 5em !important;
  }

  .main-btn {
    font-family: Open sans;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #f5d315;
    color: #333333;
    border: solid 1.9px #333333;
    padding: 2% 14%;
    transition: all 0.3s ease-in;
  }
  .main-btn:hover {
    background-color: #333333;
    transition: all 0.3s ease-out;
    color: white;
  }
</style>

<div
  class="col justify-content-center d-flex align-items-center"
  style={`background-image: url(${card.image})`}>
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
