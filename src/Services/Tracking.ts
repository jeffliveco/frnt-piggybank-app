export interface ITracking {
    getTotalCoins(): Promise<number>;
    getTotalCoinsByCoin(): Promise<number>;
}

export class Tracking implements ITracking {
    getTotalCoins(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCoinsByCoin(): Promise<number> {
        throw new Error("Method not implemented.");
    }

}