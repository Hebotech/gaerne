<script>
  // your script goes here
</script>

<style>
  .logo-container {
    background-color: #131313;
    clip-path: polygon(97% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
    width: 100%;
  }

  @media screen and (min-width: 550px) {
    .logo-container {
    }
  }

  @media screen and (min-width: 770px) {
    .logo-container {
    }
  }

  .cta-column button {
    border: none;
    font-family: Cousine;
    /* color: #333;
    border: 5px #f5d315 solid;
    background-color: #f5d315; */
    background-color: transparent;
    border: 4px #f5d315 solid;
    color: #f5d315;
    padding: 1% 9%;
    transition: all 0.5s ease-out;
    font-weight: 700;
    text-transform: uppercase;
  }

  .cta-column button:hover {
    transition: all 0.3s ease-in;
    color: #333;
    background-color: #f5d315;
  }
</style>

<!-- markup (zero or more items) goes here -->

<div class="logo-container row m-0 p-4">
  <div class="col-md-6 col-12 d-flex justify-content-center my-md-0 my-3 justify-content-md-between">
    <img src="/images/logo.png" alt="Logo Gaerne México" />
  </div>
  <div class="col-md-6 col-12 cta-column d-flex flex-column align-items-md-end align-items-center justify-content-center" >
    <button>
      Ser distribuidor
    </button>
  </div>
</div>
