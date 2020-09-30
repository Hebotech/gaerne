<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  export let card;

  onMount(() => {
    console.log(card);
  });
</script>

<style>
  .card,
  img {
    border-radius: 10px;
  }
  .main-btn {
    font-family: Open sans;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #f5d315;
    color: #333333;
    border: solid 1.9px #333333;
    padding: 2% 30%;
    transition: all 0.3s ease-in;
  }
  .main-btn:hover {
    background-color: #333333;
    transition: all 0.3s ease-out;
    color: white;
  }
</style>

<div class="col-3 ">
  <div class="card ">
    <div class="card-img-top">
      <img src={card.image} alt="" class="img-fluid" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{card.name}</h5>
      <p class="card-text">{card.description}</p>
      <button
        class="main-btn"
        on:click={() => navigate(`/producto/${card.name}`, { replace: true })}>
        Ir ahora
      </button>
    </div>
  </div>
</div>
