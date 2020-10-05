<script>
  $: date = new Date();
</script>

<style>
  .main-footer {
    background-color: #333;
    color: white;
  }
  .footer-content {
    padding: 2%;
  }
  .main-footer ul {
    list-style: none;
    padding-inline-start: none;
    padding-inline-end: none;
  }
  .main-footer .brand {
    align-items: center;
    padding: 2% 0;
    background-color: #f5d315;
    font-size: 2em;
    color: black;
    font-weight: 700;
  }
  .main-footer .brand img {
    filter: invert(100%);
  }
</style>

<!-- markup (zero or more items) goes here -->
<footer class="container-fluid main-footer">
  <div class="row brand justify-content-center">
    <div class="col-md-4 col-lg-3 col-6 text-center">
      <img src="/images/logo.png" alt="logo gaerne" class="img-fluid m-auto m-md-0">
      <h3 >
        THE BOOTS CO
      </h3>
    </div>
    
  </div>
  <div class="row m-0 justify-content-between align-items-center footer-content">
    <div class="col-5">

      <p>
        Gaerne es una marca Italiana de alta gama especializada en productos para moto con altas intenciones en ser grandes
      </p>
    </div>
    
    <div class="col-5 text-right">
      <h5>
        Categorías
      </h5>

      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
      </ul>
    </div>
    <div class="col-12">
      <small>
        Importador oficial Gaerne México {date.getFullYear()} ®
      </small>
    </div>
  </div>
</footer>
