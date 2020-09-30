<script>
  import CategoryCard from 'Molecules/Home/CategoryCard';
  import { onMount } from 'svelte';

  let cards = [
    {
      name: 'Enduro',
      description: 'Lo mejor que puede haber en la historia',
      image: 'http://www.gaerne.com/images/articoli/boots/2174_073.jpg',
    },
    {
      name: 'Trial',
      description: 'Lo mejor que puede haber en la historia',
      image: 'http://www.gaerne.com/images/articoli/boots/2174_079.jpg',
    },
    {
      name: 'Todoterreno',
      description: 'Lo mejor que puede haber en la historia',
      image: 'http://www.gaerne.com/images/pictures/post-sg12-.jpg',
    },
  ];
</script>

<style>
</style>

<div class="row justify-content-around mt-4 mb-4 text-center">
  <div class="col-12">
    <h2>Categories</h2>
  </div>
  {#each cards as card, cardIndex (cardIndex)}
    <CategoryCard {card} />
  {/each}
</div>
