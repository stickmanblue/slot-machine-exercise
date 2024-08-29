import { ReelSymbol } from "./reel-symbol.enum";

export interface RollResult {
    winnings: number;
    results: ReelSymbol[];
}
