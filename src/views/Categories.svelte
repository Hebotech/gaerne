<script>
  export let name;
</script>

<style>
  /* your styles go here */
</style>

<div class="container-fluid">
  <div class="row">
    {#if name}
      <div class="col-12">{name}</div>
    {/if}
  </div>
</div>
