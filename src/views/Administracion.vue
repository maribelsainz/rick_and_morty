<template>
  <div class="admin py-3">
    <h2>Administración</h2>

    <table class="admin__table table table-hover">
      <thead>
        <tr>
          <th>Nº</th>
          <th>Personaje</th>
          <th>Opinión</th>
          <th>Usuario</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in traerComentarios" :key="index">
          <th>{{ index }}</th>
          <td>{{ item.name }}</td>
          <td>{{item.comentario}}</td>
          <td>{{ item.usuario }}</td>
          <td>
            <button type="button" class="btn btn-dark">Editar</button>
          </td>
          <td>
            <button type="button" class="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Administracion"
};
</script>

<style lang="scss">
.admin {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
  color: white;
}
.admin__table {
  color: white;
}
</style>