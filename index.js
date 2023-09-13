particlesJS("background", {

    particles:{
        Number:{
        value: 15, // Cantidad de particulos en el fondo
        density: {
            enable:true,
            value_area: 300, //Area donde estaran distribuidas las particulas
        },
    },
    color:{
        value:"#ffffff"//color de las particulas
    },
    shape:{
        type:"triangle",//Forma de las particulas
    },
    opacity:{
        value:0.8, //Se basa en la opacidad de las particulas
        random:true,
        anum:{
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync:false,

        },
    },
    size: {
        value:5,//tamaño de particulas
        random:true,
        anim:{
            enable:true,
            speed:4,
            size_min:0.3,
            sync:false,
        },
    },
    //conecta las lineas que forman las particulas
    line_linked:{
        enable:true,
        distance:150, //distancia entre una particula a otra
            color:"#ffffff",
            opacity:0.4,
            width:5,
    },

    // movimiento de las paticulas
    move:{
        enable:true,
        speed:2,
        direction: "none",
        random:false,
        straight:false,
        out_mode:"bounce",
        bounce:false,
    },
},
// ajustes interactivos
interactivity:{
    detect_on: "canvas",
    events:{
        onhover:{
             enable:true, //activar interaccion de hover
             mode:"repulse",
        },
        onclick:{
            enable:true, //interaccion al hacer click
            mode:"push", //presiona y esparce las particulas al hacer click

        },
        resize: true //ajustar tamaño de particulas animadas
    },
},
// deteccion automatica de retina en pantalla
retine_detect
})
