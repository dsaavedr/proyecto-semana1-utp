let team;

// Crear el componente de Vue para usar en la página.

Vue.component("member", {
    template: `
    <div class="col-md-6 col-lg-3">
        <div class="col-12 member">
            <img :src="member.image" alt="imagen-integrante">
            <h3 class="text-center">{{member.nombre}}</h3>
            <h4 class="text-center">{{member.rol}}</h4>
            <p class="text-center">{{member.descripcion}}</p>
        </div>
    </div>
    `,
    props: ["member"]
});

// Importar información de integrantes

let members;

const call = async query => {
    const response = await fetch(query);
    const data = await response.json();

    return data;
};

call("./team.json")
    .then(data => {
        // Crear aplicación de Vue
        team = new Vue({
            el: "#team",
            data: {
                members: data
            }
        });
    })
    .catch(err => console.error(err));
