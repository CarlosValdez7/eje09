"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./Alumno");
var array = new Array();
var alumno = new Alumno_1.Alumno();
alumno.insert("12400326", "Carlos", "Valdez", 8, "Masculino", "03-03-2017", true, array);
alumno.insert("12400360", "Juan", "Tapia", 8, "Masculino", "03-03-2017", true, array);
alumno.read();
alumno.delete("12400360");
alumno.read();