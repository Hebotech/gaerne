<script>
  import { navigate } from 'svelte-routing';

  export let name;

  $: categoryName = 'Enduro';
</script>

<style>
  .label {
    background-color: #000;
    cursor: pointer;
    padding: 1% 0;
  }
  .label h4 {
    color: white;
    font-family: 'Cousine';
    transition: all 0.5s ease-in;
    font-weight: 400;
  }
  .label:hover h4 {
    transition: all 0.5s ease-out;
    font-weight: bolder;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="container-fluid text-center">
  <div class="row">
    <div class="col-2 label" on:click={()=>navigate(`/categoria/${categoryName}`)}>
      <h4>
          {categoryName}
      </h4>
    </div>
    <div class="col-12 text-center">
      <h1>{name}</h1>
    </div>
  </div>
</div>
