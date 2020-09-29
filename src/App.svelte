<script>
  import MainButton from "Atoms/MainButton";
  import { each } from "svelte/internal";

  let name = "world ";
  $: best = name + " Cámara ";

  let ctas = ["Hola", "perro", "cheleamos", "o k?"];

  let showButton = false;

  function toggle() {
    showButton = !showButton;
  }
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col-12 text-center flex-row">
      {#if showButton}
        <h1 class="text-center">Hello {best}</h1>
      {/if}
      <h4>Holaa</h4>
      {#each ctas as cta, ctaIndex (ctaIndex)}
        <MainButton on:click={toggle} content={cta} />
      {/each}
      {showButton}
    </div>
  </div>
</div>
