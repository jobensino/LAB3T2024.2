import { TCanDoFunc } from "../type";

class Permuter<T> {
    private _items:T[];

    constructor(data:T[]){
        this._items = [...data];
    }

    private localPermute(i:number,j:number):boolean{

        if (!(i>=0 && i<this.items.length)) return false;
        if (!(j>=0 && j<this.items.length)) return false;

        const aux = {...this._items[i]}
        this._items[i] = {...this._items[j]}
        this._items[j] = {...aux}

        return true;
    }

    permute(i:number,j:number,canDo?:TCanDoFunc<T>):boolean {

        if (canDo){
            if (canDo(this.items[i],this.items[j])){
                return this.localPermute(i,j);
            }
            return false;
        }
        
        return this.localPermute(i,j);
    }

    get items() {return this._items}
}

export {Permuter}