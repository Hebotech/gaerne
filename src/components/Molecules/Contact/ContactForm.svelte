<script>
  // your script goes here
</script>

<style>
  .contact button {
    background-color: transparent;
    font-family: Cousine;
    padding: 1.5% 10%;
    border-color: #f4d316;
    color: #f4d316;
    border-radius: 1px;
    transition: all ease-in 0.5s;
  }

  .contact button:hover {
    transition: all ease-out 0.5s;
    border-color: #333;
    background-color: #f4d316;
    font-weight: bolder;
    text-decoration: underline;
    color: #333;
  }

  .contact input,
  textarea {
    border-radius: 1px;
    font-family: Open Sans;
  }
</style>

<form class="contact ">
  <div class="form-row">
    <div class="form-group col-md-6">
      <!-- <label for="inputPassword4">Nombre</label> -->
      <input placeholder="Nombre" type="name" class="form-control" id="inputPassword4" />
    </div>
    <div class="form-group col-md-6">
      <!-- <label for="inputEmail4">Email</label> -->
      <input placeholder="E-mail" type="email" class="form-control" id="inputEmail4" />
    </div>

    <div class="form-group col-md-12">
      <!-- <label for="inputMessage">Mensaje</label> -->
      <textarea
        placeholder="Mensaje"
        class="form-control"
        name="inputMessage"
        id="inputMessage"
        cols="20"
        rows="3" />
    </div>
  </div>
  <button
    type="submit"
    on:click|preventDefault={(e) => console.log(e)}
    class="btn btn-primary">Enviar mensaje</button>
</form>
