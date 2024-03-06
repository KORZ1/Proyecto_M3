class Queue {
    #items;

    constructor() {
        this.#items = [];
    }

    enqueue(element) {
        // Agrega un nuevo elemento a la cola , situandolo al final de esta
        this.#items.push(element)
    }

    dequeue() {
        // Retorna el primer elemento de la cola, quitandolo de esta
        if (this.isEmpty()) {
            return "La cola esta vacia";
        }
        this.#items.shift();
    }

    front() {
        // retorna el primer elemento de la cola, sin eliminarlo
        if (this.isEmpty()) {
            return "La cola esta vacia"
        }
        return this.#items[0];
    }

    back() {
        // retorna el ultimo elemento de la cola, sin eliminarlo
        return this.#items[this.#items.length -1];
    }

    size() {
        // retorna el numero de elementos que contiene la cola
        return this.#items.length;
    }

    isEmpty() {
        // Retorna un booleano si la cola esta vacia
        return this.size() === 0
    }

    print() {
        // muestra el contenido de la cola
        return `Lista de alumnos -> [ ${this.#items.join(', ')} ]`;
    }
}
const Alumno = new Queue();
console.log(Alumno.print());
Alumno.enqueue('Cristiano'); //Agregamos el primer elemento (Alumno1)-->['Cristiano']
Alumno.enqueue('Messi'); //Agregamos el segundo elemento (Alumno2)-->['Messi']
Alumno.enqueue('Mbappe'); //Agregamos el tercer elemento (Alumno3)-->['Mbappe']
console.log(Alumno.print()); //Mostrar contenido de la cola 
console.log(Alumno.front()); // primer elemento de la cola-> 
console.log(Alumno.back()); // ultimo elemento de la cola-> 
console.log(Alumno.size()); //tamaño de la cola-> 
Alumno.enqueue(document.getElementById("loginButton").addEventListener("click", function() {
    // Obtener valores del formulario
    var username = document.getElementById("username").value;}))
console.log(Alumno.print());

console.log("----------------"); //Separador visual en consola

