<script>
  import CategoryCard from 'Molecules/Home/CategoryCard';
  import { onMount } from 'svelte';

  let cards = [
    {
      name: 'Todoterreno',
      description: 'Lo mejor que puede haber en la historia',
      image: 'http://www.gaerne.com/images/pictures/post-sg12-.jpg',
    },
    {
      name: 'Todoterreno',
      description: 'Lo mejor que puede haber en la historia',
      image: 'http://www.gaerne.com/images/pictures/post-sg12-.jpg',
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

<div class="row p-5 justify-content-center mt-4 mb-4 text-center">
  <div class="col-12">
    <h2>Categories</h2>
  </div>
  {#each cards as card, cardIndex (cardIndex)}
    <CategoryCard {card} />
  {/each}
</div>
