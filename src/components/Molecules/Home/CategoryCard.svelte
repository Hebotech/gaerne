<script>
  import { onMount } from 'svelte';
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
</style>

<div class="col-3 ">
  <div class="card ">
    <div class="card-img-top">
      <img src={card.image} alt="" class="img-fluid" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{card.name}</h5>
      <p class="card-text">{card.description}</p>
    </div>
  </div>
</div>
