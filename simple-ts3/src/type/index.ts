interface TDisciplina {
    codigo: number,
    name: string,
}

interface TEstudante {
    matricula: string,
    name: string,
}

type TCanDoFunc<T> = (i:T,j:T) => boolean;

export type {TDisciplina,TEstudante,TCanDoFunc}