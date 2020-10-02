<script>
  export let shortDescription;
  export let images;
  export let longDescription;

  $: imagesArray = images.map((image, imageIndex) => {
    return { image, imageIndex };
  });

  $: activeIndex = 0;
  $: activeImage = imagesArray[activeIndex];
  $: inActiveImages = imagesArray.pop(activeIndex);

  function activateImage(imageIndex) {
    activeIndex = imageIndex;
  }
</script>

<style>
  .inactive-image {
    padding: 25% 10;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="row">
  <div class="col-6">
    <h3>
      {shortDescription}
    </h3>
    <div class="product-showcase">
      {#each inActiveImages as image (image.imageIndex)}
        <div on:click={activateImage(image.imageIndex)} class="inactive-image" style={`background-image: url(${{image}})`}/>
      {/each}
    </div>
  </div>
  <div class="col-6">
    <div class="active-image" style={`background-image: url(${activeImage})`}/>
  </div>
  <div class="col-12">
    <p>
      {longDescription}
    </p>
  </div>
</div>
