
import { Alumno } from "./Alumno";
var array=new Array();

let alumno= new Alumno();

alumno.insert("12400326","Carlos","Valdez",8,"Masculino","03-03-2017",true,array);

alumno.insert("13400360","Juan","Tapia",8,"Masculino","03-03-2017",true,array);

alumno.read();

alumno.delete("12400326");

alumno.read();