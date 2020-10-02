<script>
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
  $: activeImage = imagesArray[activeIndex];
  $: inActiveImages = imagesArray.filter(
    (image) => image.imageIndex !== activeIndex
  );

  function activateImage(imageIndex) {
    activeIndex = imageIndex;
  }
</script>

<style>
  .product-description {
    height: 100%;
  }
  .contentt {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
  }
  .inactive-image {
    padding: 25%;
    width: 100%;
    height: 100%;
    background-size: contain;
    flex-basis: 3%;
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
    flex-flow: nowrap row;
    overflow: auto;
  }
  .product-images {
    cursor: pointer;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="row">
  <div class={`product-description col-md-4 col-12 text-center ${zoom?'order-md-1' :'order-md-0'} order-1`}>
    <div class="contentt align-self-end">
      <h1>
        {name}
      </h1>
      <h3>
        {shortDescription}
      </h3>
      <p>{longDescription}</p>
      <div class="product-showcase">
        {#each inActiveImages as image (image.imageIndex)}
        <div on:click={activateImage(image.imageIndex)} class="inactive-image" style={`background-image: url(${image.image})`}/>
        {/each}
      </div>
    </div>
  </div>
  <div on:click={()=> zoom = !zoom} class={`col-12 product-images order-0 ${zoom?'oder-md-0' :'col-md-8 order-md-1'}`}>
    <!-- <div class="active-image" style={`background-image: url(${activeImage.image})`}/> -->
    {#each imagesArray as image (image.imageIndex)}
      <img loading="lazy" src={image.image} alt={`Gaerne botas ${name}`} class="img-fluid">
      {/each}
  </div>
  <div class="col-12 order-3">
    <p>
      {longDescription}
    </p>
  </div>
</div>
