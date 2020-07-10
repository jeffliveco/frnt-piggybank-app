import { IBank, Bank } from "./Bank";
import { ITracking, Tracking } from "./Tracking";
import CashRequest from "../Model/CashRequest";

export interface APIService extends IBank, ITracking {}

export class APIServiceImpl implements APIService {
    private static instance: APIService;
    static getInstance(): APIService {
        if (!this.instance){
            this.instance = new APIServiceImpl();
        }
        return this.instance;
    }

    private bankService: IBank;
    private tracingService: ITracking;

    constructor(){
        this.bankService = new Bank();
        this.tracingService = new Tracking();
    }

    async addCash(request: CashRequest): Promise<string> {
        return this.bankService.addCash(request);
    }

    async getTotalCash(): Promise<number> {
        return this.bankService.getTotalCash();
    }

    async getTotalCashByCoin(coin: string): Promise<number> {
        return this.bankService.getTotalCashByCoin(coin);
    }

    async getTotalCoins(): Promise<number> {
        return this.tracingService.getTotalCoins();
    }

    async getTotalCoinsByCoin(coin: string): Promise<number> {
        return this.tracingService.getTotalCoinsByCoin(coin);
    }
}