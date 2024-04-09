const render = () => {
    const persona = {
        nombre: "Daniela",
        edad: 18,
        esMayorDeEdad: true,
    };
    console.log (persona);
    console.log (persona.nombre ,persona.edad, persona.esMayorDeEdad);

    persona.edad = 30;
    console.log (persona);

    persona.nombreMascota = "Toby";
    console.log(persona);

    const persona2 = {
        nombre: "Ana",
        edad: "17",
        nombreMascota: "Duna",
    };

    console.log(persona2);

    const familia= [persona, 
        persona2,
        { nombre:"Pedro", edad: 40, esMayorDeEdad: true, nombreMascota: "Rex"}
    ];

    console.log(familia);

    familia[2].nombre = "Pablo";

    console.log(familia);

    for (const integrante of familia) {
        console.log(integrante.nombre);
    }
}

document.addEventListener("DOMContentLoaded", render);