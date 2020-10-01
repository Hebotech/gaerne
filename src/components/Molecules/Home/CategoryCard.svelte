<script>
  import { navigate } from 'svelte-routing';
  export let card;
</script>

<style>
  .col {
    flex-basis: 33%;
    margin: 0.5%;
  }
  .col:last-of-type {
    flex-basis: 100%;
    max-height: 50% !important;
  }
  .card {
    border-radius: none;
  }
  .main-btn {
    font-family: Open sans;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #f5d315;
    color: #333333;
    border: solid 1.9px #333333;
    padding: 2% 1%;
    transition: all 0.3s ease-in;
  }
  .main-btn:hover {
    background-color: #333333;
    transition: all 0.3s ease-out;
    color: white;
  }
</style>

<div class="col ">
  <div class="card bg-dark text-white text-center">
    <img
      class="card-img"
      src={card.image}
      alt={`Bota gaerne ${card.description}`} />
    <div
      class="d-flex flex-column card-img-overlay align-self-center justify-content-center">
      <h5 class="card-title">{card.name}</h5>
      <p class="card-text">{card.description}</p>
      <button
        class="main-btn"
        on:click={() => navigate(`/categoria/${card.name}`)}>
        Ir ahora
      </button>
    </div>
  </div>
</div>
