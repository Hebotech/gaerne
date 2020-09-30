<script>
  import CategoryCard from 'Molecules/CategoryCard';

  export let cards;
</script>

<style>
</style>

<div class="row">
  {#each cards as card, cardIndex (cardIndex)}
    <CategoryCard {card} />
  {/each}
</div>
