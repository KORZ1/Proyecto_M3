//Acceso Juan
document.getElementById("loginButton").addEventListener("click", function() {
    // Obtener valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales 
    if (username === "Juan" && password === "1234") {
        // Redirigir al otro index si las credenciales son correctas
        window.location.href = "index2.html";
    } else {
        alert("Tu usuario o contraseña son incorrectos.");
    }
});

//////////////////////////////////////////////////////////////////////////////////

class Alumno {
    constructor(nombre, apellidoP, apellidoM, edad, materia1, materia2, materia3, materia4, materia5){
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.edad = edad;
        this.materia1 = materia1;
        this.materia2 = materia2;
        this.materia3 = materia3;
        this.materia4 = materia4;
        this.materia5 = materia5;
    }
};
const Juan = new Alumno("Juan", "Sánchez", "Marín", 20, "Cálculo Integral", "Álgebra Lineal", "Física", "Programación", "Química")
console.log(Juan);
const Cade = new Alumno("Cade", "Rock", "Hamilton", 23, "Cálculo Integral", "Álgebra Lineal", "Física", "Programación", "Química")
console.log(Cade);
const Pedro = new Alumno("Pedro", "Cervera", "Morelos", 21, "Cálculo Integral", "Álgebra Lineal", "Física", "Programación", "Química")
console.log(Pedro);
const Pancho = new Alumno("Pancho", "Panter", "Raya", 25, "Cálculo Integral", "Álgebra Lineal", "Física", "Programación", "Química")
console.log(Pancho);
const Moises = new Alumno("Moises", "Zapata", "Castillo", 19, "Cálculo Integral", "Álgebra Lineal", "Física", "Programación", "Química")
console.log(Moises);

//////////////////////////////////////////////////////////////////////////////////
const btnAbrirModal = document.querySelector("InscripcionCurso");
const modal = document.querySelector("#modal");
btnAbrirModal.addEventListenner("click",()=>
{
    modal.showModal();
});

btnCerrarModal.addEventListener("click",()=>
{
    modal.close();
});

//////////////////////////////////////////////////////////////////////////////////
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
};

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
};
