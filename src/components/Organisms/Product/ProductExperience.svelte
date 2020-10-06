<script>
  import { slide, fly, blur } from 'svelte/transition';

  export let name;
  export let shortDescription;
  export let images;
  export let longDescription;

  let zoom = false;

  $: imagesArray = images.map((image, imageIndex) => {
    return {
      image,
      imageIndex,
    };
  });

  $: activeIndex = 0;
  $: inActiveImages = imagesArray.filter(
    (image) => image.imageIndex !== activeIndex
  );

  function activateImage(imageIndex) {
    activeIndex = imageIndex;
  }
</script>

<style>
  .product-description {
    min-height: 100%;
  }
  .product-description h1 {
    font-family: Cousine;
    font-weight: 700;
  }
  .product-description h3 {
    font-family: Cousine;
  }
  .product-description p {
    font-family: Open Sans;
  }
  .contentt {
    position: sticky;
    position: -webkit-sticky;
    top: 10%;
    background-image: url(/background-line.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding: 15% 15% 15% 0;
  }
  .inactive-image {
    padding: 15%;
    width: 100%;
    height: 100%;
    background-size: contain;
    flex-basis: 1%;
    cursor: pointer;
    background-repeat: no-repeat;
  }
  .active-image {
    background-repeat: no-repeat;
    background-size: contain;
    padding: 25%;
    width: 100%;
    height: 100%;
  }

  .product-showcase {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-around;
  }
  .product-images {
    cursor: pointer;
  }
</style>

<div class="row position-relative p-3">
  <div
    class={`product-description col-md-4 col-12 text-md-right text-center ${zoom ? 'order-md-1' : 'order-md-0'} order-1`}>
    <div class="contentt align-self-end">
      <h1>{name}</h1>
      <h3>{shortDescription}</h3>
      <p>{longDescription}</p>
      <div class="product-showcase">
        {#each inActiveImages as image (image.imageIndex)}
          <div
            in:fly={{ delay: image.imageIndex * 200 }}
            out:fly
            on:click={activateImage(image.imageIndex)}
            class="inactive-image"
            style={`background-image: url(${image.image})`} />
        {/each}
      </div>
    </div>
  </div>
  <div
    on:click={() => (zoom = !zoom)}
    class={`col-12 product-images order-0 ${zoom ? 'oder-md-0' : 'col-md-8 order-md-1'}`}>
    {#each imagesArray as image (image.imageIndex)}
      <img
        in:blur={{ duration: 1000 }}
        out:blur
        loading="lazy"
        src={image.image}
        alt={`Gaerne botas ${name}`}
        class="img-fluid" />
    {/each}
  </div>
</div>
