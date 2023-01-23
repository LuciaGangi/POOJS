class Estudiante {
  constructor() {
    this.nombre = "";
    this.asignaturas = ["Javascript", "HTML", "CSS"];
  }

  obtenDatos() {
    return { nombre: this.nombre, asignaturas: this.asignaturas };
  }
}

const estudiante1 = new Estudiante();
estudiante1.nombre = "Juan";
console.log(estudiante1.obtenDatos());
