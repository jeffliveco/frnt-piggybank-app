export default class Coin {
    name: string;
    value: number;
    totalCoin?: number;
    totalCash?: number;

    constructor(){
        this.name = '';
        this.value = 0;
    }
}