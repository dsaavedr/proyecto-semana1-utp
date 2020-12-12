// Crear el componente de Vue para usar en la página.

Vue.component("member", {
    template: `
    <div class="col-md-3 col-sm-6 member">
        <img src="https://via.placeholder.com/150" alt="imagen-integrante">
        <h3 class="text-center">{{nombre}}</h3>
        <p class="text-center">{{descripcion}}</p>
    </div>
    `
});

const team = new Vue({
    el: "#team",
    data: {},
    methods: {}
});
