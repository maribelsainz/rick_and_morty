<template>
  <div class="home pt-4">
    <div class="container">
      <!-- Filtro buscador por nombre de personaje -->
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          v-model="busqueda"
          placeholder="Escribe el personaje que deseas buscar..."
        />
      </div>

      <!-- Cards de personajes con nombre y foto -->
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3"
          v-for="(item, index) in datosApi"
          :key="index"
        >
          <div class="card">
            <img :src="item.image" class="card-img-top" :alt="item.index" />
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <!-- Botón a Modal modal para opinar sobre personaje-->
              <button
                type="button"
                class="btn btn-success mx-3"
                data-toggle="modal"
                data-target="#exampleModalOpinar"
              >Opinar</button>

              <!-- Botón a Modal de Ver Más -->
              <button
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#exampleModalVerMas"
              >Ver Más</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ver Más-->
    <div
      class="modal fade"
      id="exampleModalVerMas"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Rick Sanchez</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body container-fluid">
            <div class="row">
              <div class="col-md-6 ml-auto">
                <img
                  class="img-fluid"
                  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  alt="imagen"
                />
              </div>
              <div class="col-md-6 ml-auto">
                <ul class="text-center">
                  <li>Status del personaje</li>
                  <li>Especie del personaje</li>
                  <li>Nombre de la ubicación del personaje</li>
                  <li>Cantidad de episodios</li>
                  <li>Fecha de creación</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success">Agregar a Favoritos</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para opinar-->
    <div
      class="modal fade"
      id="exampleModalOpinar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nombre de Personaje</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control my-3"
                  id="formGroupExampleInput"
                  placeholder="Ingresa tu nombre"
                />
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Ingresa tu opinión aquí..."
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-success">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      busqueda: ""
      // nombre: this.$store.getters.envioPersonajes[this.$route.params.index].name,
      // indexURL: this.$route.params.index,
      // imagen: this.$store.getters.envioPersonajes[this.$route.params.index].image
    };
  },
  computed: {
    datosApi() {
      return this.$store.getters.envioPersonajes.filter(item => {
        return item.name.toLowerCase().includes(this.busqueda.toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss">
.home {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
  color: black !important;
}
</style>
