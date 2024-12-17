import { Permuter } from "./permuter";
import { TCanDoFunc, TDisciplina } from "./type"

console.log("\nIniciando...\n\n")

const items:TDisciplina[] = [{codigo:1,name:"Matemática"},{codigo:2,name:"Portugues"}];
const owner = new Permuter<TDisciplina>(items);

const canDo:TCanDoFunc<TDisciplina> = (i:TDisciplina,j:TDisciplina)=> {
    return i.name<j.name;
}

owner.permute(0,1,canDo);

console.log(items);
console.log(owner.items);