
// TRANSFOMADAS
/**
 * En este caso utilice la segunda opcion.
 * Segunda
    *Una función RotacionX, una RotaciónY y otra RotacionZ, que retorne
    *la matriz de rotación correspondiente, a partir del ángulo de rotación 
    *a ser aplicado (recibido como parámetro).

    *Una función RotaciónRealX, una RotaciónRealY y otra RotacionRealZ, 
    *que retorna el objeto recibido como parámetro finalmente rotado en 
    *el eje correspondiente, en el ángulo y a partir de la posición inicial 
    *también referidos como parámetros
 * 
 */
//--------------------------------------------------------------------------------------------------------


/**
 * COSTRUCCION GEOMETRICA DE LA PIRAMIDE
 * Av = Vértices para la geometría
 * Retorna geom = Apartir de Av.
 */
function Geometria(Av){

    geom = new THREE.Geometry();
    var largoVertice = Av.length;
    for (i = 0; i < largoVertice; i++){
        x = Av[i][0];
        y = Av[i][1];
        z = Av[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;

}


//TRASLACIÓN 
function Traslacion(vt){
    //vt = Vector de traslacion
    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);
    
    return matrizT; //matrizT = Matriz de traslacion.
    
}


//ESCALADO
function Escalado(vs){
//vs = Vector de Escalado
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0], 0, 0, 0,
                0, vs[1], 0, 0,
                0, 0, vs[2], 0,
                0, 0, 0, 1);

    return matrizS; // matrizS = Matriz de Escalado (VECTOR).

}

//ESCALADO REAL: Aplica el vector de Escalado (A TODA LA PIRAMIDE).

function EscaladoReal(fig, posini, vs){

//fig = Objeto tipo THREE.LINE que representa el objeto grafico.
//posini = Posicion inicial de fig.
//vs = Vector de Escalado.

    tr = [-posini[0], -posini[1], -posini[2]];  //Vector para llevar la figura al origen.
    fig.applyMatrix(Traslacion(tr));            //Traslacion al origen para escalar la figura.
    fig.applyMatrix(Escalado(vs));              //Se aplica escalado a la figura.
    fig.applyMatrix(Traslacion(posini));        //Se traslada la figura a la posicion inicial.

}


//ROTACIÓN X

function Rotacionx(rt){
// rt = Angulo de rotacion
    var matrizRx = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];

    matrizRx.set(1, 0, 0, 0,
                0, cs, -sn, 0,
                0, sn, cs, 0,
                0, 0, 0, 1); 
    
    return matrizRx; //matrizRx = Matriz de rotacion para el angulo rt

}

function RotacionRealx(fig, posini, rt){

    tr = [-posini[0], -posini[1], -posini[2]];  //Vector para llevar la figura al origen.
    fig.applyMatrix(Traslacion(tr));            //Traslacion al origen para escalar la figura.
    fig.applyMatrix(Rotacionx(rt));             //Se aplica escalado a la figura.
    fig.applyMatrix(Traslacion(posini));        //Se traslada la figura a la posicion inicial.

}

//-------------------------------------------------------------------------------------------

//ROTACIÓN Y

function Rotaciony(rt){
 //rt = Angulo de rotacion
    var matrizRy = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];

    matrizRy.set(cs, 0, sn, 0,
                0, 1, 0, 0,
                -sn, 0, cs, 0,
                0, 0, 0, 1);      
    
    return matrizRy; //matrizRy = Matriz de rotacion para el angulo rt.

}

function RotacionRealy(fig, posini, rt){

    tr = [-posini[0], -posini[1], -posini[2]];  //Vector para llevar la figura al origen.
    fig.applyMatrix(Traslacion(tr));            //Traslacion al origen para escalar la figura.
    fig.applyMatrix(Rotaciony(rt));             //Se aplica escalado a la figura.
    fig.applyMatrix(Traslacion(posini));        //Se traslada la figura a la posicion inicial.

}

//-------------------------------------------------------------------------------------------

//ROTACIÓN Z

function Rotacionz(rt){
//rt = Angulo de rotacion
    var matrizRz = new THREE.Matrix4();
    let rad = rt * Math.PI / 180;
    
    [cs, sn] = [Math.cos(rad), Math.sin(rad)];

    matrizRz.set(cs, -sn, 0, 0,
                sn, cs, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1);    

    return matrizRz; //matrizRz = Matriz de rotacion para el angulo rt.

}

function RotacionRealz(fig, posini, rt){

    tr = [-posini[0], -posini[1], -posini[2]];      //Vector para llevar la figura al origen.
    fig.applyMatrix(Traslacion(tr));                //Traslacion al origen para escalar la figura.
    fig.applyMatrix(Rotacionz(rt));                 //Se aplica escalado a la figura.
    fig.applyMatrix(Traslacion(posini));            //Se traslada la figura a la posicion inicial.
 
}