<script>
  import HeroHeader from 'Organisms/Category/HeroHeader';

  export let name;
  $: categoryObject = {
    name: 'Enduro',
    image: '/images/gaerne-showcase.jpg',
    description:
      'La descripción es lo que explica un poco de la categoría y le da valor y presencia a los productos.',
    products: [{}],
  };
</script>

<style>
</style>

<div class="container-fluid text-center">
  <HeroHeader {...categoryObject} />
  <div class="row">
    <div class="col-12">
      <h1>{name}</h1>
      <p>Justo éste es el nombre de la categoría <strong> {name} </strong></p>
    </div>
  </div>
</div>
