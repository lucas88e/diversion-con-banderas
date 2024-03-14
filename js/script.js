const countriesList = document.getElementById("countries-list")

const body = document.body;

console.log(document.body)



function api() {
    fetch("https://restcountries.com/v3/all")
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then((data) => {

            // console.log(data[0].name.official);
            const nombres = (data.map(element => limpiarYConvertirAMayusculas(element.name.common)))
            // const banderasPorNombre = []
            // for (let i = 0; i < nombres.length; i++) {
            //     banderasPorNombre[nombres[i]] = data[i].flags[1]
            // }
            nombres.sort()
            // const banderas = (data.map(element => element.flags[1]))
            // const banderas2 = banderas.sort()
            // const ordenados = nombres.sort()
            for (let i = 0; i < nombres.length; i++) {
               
                const paisData = data.find(pais => limpiarYConvertirAMayusculas(pais.name.common) === nombres[i])
                const banderas = paisData.flags[1]  
                        
                     countriesList.innerHTML += `<section id ="bloque"> 
                
                <button id = boton-${i}><img  src=${banderas}></button>
                <div id ="datos"><li>${nombres[i]}</li>
                </section> `        

            }
            function agregarBoton() {

                for (let i = 0; i < data.length; i++) {
                    const nombre = nombres[i]

                    // const capital = (data[i].capital)
                    // const population = data[i].population
                    // const car = (data[i].car.side)
                    // const banderas = data[i].flags[1]
                    // const bandera = banderas[i]

                    const botones = document.getElementById(`boton-${i}`)

                    botones.addEventListener("click", () => {
                  
                        const paisData = data.find(pais => limpiarYConvertirAMayusculas(pais.name.common) === nombre);

                        mostrarInfo(paisData)

                    })
                }
            }
            agregarBoton()

        }
        )
        .catch((error) => {
            console.log('Error al obtener los datos', error);
        });
}
function mostrarInfo(pais) {
    const modal = document.querySelector("#modal");
    const { name, capital, population, car, flags } = pais;

    modal.innerHTML = `<div class="modals">
        <div id="izq"><img class="fotos" src="${flags[1]}">
            <button id="cerrar">Cerrar</button>
        </div>
        <div id="derecha">
            <h2>${name.common}</h2>
            <ul>
                <li><strong>Capital: </strong>${capital}</li>
                <li><strong>Población: </strong>${population} habitantes</li>
                <li><strong>Lado de la carretera: </strong>${car.side}</li>
            </ul>
        </div>
    </div>`;

    modal.showModal();

    const cerrar = document.getElementById("cerrar");
    cerrar.addEventListener("click", () => {
        modal.close();
    });
}
function limpiarYConvertirAMayusculas(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase(); // NO VALIA CON PASAR A MAYUSCULAS PORQUE ALAND ISLAND ME LA PONIA AL FINAL 
}



api()


// 1- Ordenar alfabeticamente no coinciden las imagenes
// 2-Crear ventana adicional con boton de cerrar sticky


      // const paisData = data.find(pais => limpiarYConvertirAMayusculas(pais.name.common) === nombre);
                        //     mostrarInfo(paisData);
                        // modal.innerHTML = `<div class="modals"><div id ="izq"><img class="fotos" src=${banderas}>
                        // <button id="cerrar-${i}">cerrar</button></div><div id="derecha">
                        // <h2>${nombre}</h2><ul><li><strong>Capital: </strong>${capital}</li>
                        // <li><strong>Poblacion: </strong>${population} habitantes</li>
                        // <li><strong>Lado de la carretera: </strong>${car}</li></ul>
                        //  </div></div>`


                        // const cerrar = document.getElementById(`cerrar-${i}`)
                        // cerrar.addEventListener("click", () => {
                        //     console.log("click")
                        //      modal.close() })


// console.log(data)
// const boton =document.createElement("button")
// const img=document.createElement("img")
// const section= document.createElement("section")
// const div =document.createElement("div")
// body.appendChild(boton)
// body.appendChild(img)
// boton.appendChild(img)
// img.appendChild(section)
// div.appendChild(section)
// img.src =banderas[i]
// div.appendChild(countriesList)
// countriesList.innerHTML= `${nombres[i]}`
// console.log(document.body)
function agregarBoton() {

    for (let i = 0; i < data.length; i++) {
        const nombre = nombres[i]

        const capital = (data[i].capital)
        const population = data[i].population
        const car = (data[i].car.side)
        const banderas = data[i].flags[1]
        const bandera = banderas[i]

        const botones = document.getElementById(`boton-${i}`)

        botones.addEventListener("click", () => {
      
            const paisData = data.find(pais => limpiarYConvertirAMayusculas(pais.name.common) === nombre);

            mostrarInfo(paisData)

        })
    }
}