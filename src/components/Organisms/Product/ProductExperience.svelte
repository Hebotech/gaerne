<script>
  export let name;
  export let shortDescription;
  export let images;
  export let longDescription;

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
  .inactive-image {
    padding: 25%;
    width: 100%;
    height: 100%;
    background-size: contain;
    cursor: pointer;
    background-repeat: no-repeat;
  }
  .active-image {
    background-repeat: no-repeat;
    background-size: contain;
    padding: 50%;
    width: 100%;
    height: 100%;
  }

  .product-showcase {
    display: flex;
    flex-flow: nowrap row;
    overflow: auto;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="row">
  <div class="col-5 text-center">
    <h1>
      {name}
    </h1>
    <h3>
      {shortDescription}
    </h3>
    <div class="product-showcase">
      {#each inActiveImages as image (image.imageIndex)}
        <div on:click={activateImage(image.imageIndex)} class="inactive-image" style={`background-image: url(${image.image})`}/>
      {/each}
    </div>
  </div>
  <div class="col-7">
    <div class="active-image" style={`background-image: url(${activeImage.image})`}/>
  </div>
  <div class="col-12">
    <p>
      {longDescription}
    </p>
  </div>
</div>
