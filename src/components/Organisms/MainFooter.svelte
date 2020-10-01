<script>
  $: date = new Date();
</script>

<style>
  .main-footer {
    background-color: #333;
    color: white;
  }
  .row .footer-content {
    padding: 2%;
  }
  .main-footer ul {
    list-style: none;
    padding-inline-start: none;
    padding-inline-end: none;
  }
  .main-footer .brand {
    background-color: #f5d315;
  }
</style>

<!-- markup (zero or more items) goes here -->
<footer class="container-fluid main-footer">
  <div class="row">
    <div class="col-12 brand justify-content-center text-center">
      <img src="/images/logo.png" alt="logo gaerne" class="img-fluid">
      Boots co
    </div>
    
  </div>
  <div class="row m-0 justify-content-between align-items-center footer-content">
    <div class="col-5">
      <img src="/images/logo.png" alt="logo gaerne" class="img-fluid mb-4">
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
