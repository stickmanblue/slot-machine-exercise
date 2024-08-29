import { ReelSymbol } from "./reel-symbol.enum";
export interface IRollResult {
    winnings: number;
    results: ReelSymbol[];
}

export interface ISlotMachine {
    play(): Promise<IRollResult>;
}

