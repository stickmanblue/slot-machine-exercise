import { ReelSymbol } from "./reel-symbol.enum";
import { IRollResult } from "./interfaces";
import { SlotMachine } from "./slot-machine.base";

export class DefaultSlotMachine extends SlotMachine {
    constructor(reelDefinition: ReelSymbol[], reelCount: number) {
        super(reelDefinition, reelCount);
    }

    async play(): Promise<IRollResult> {

        const results = this.rollAllReels();

        const aggregatedBySymbol = results.reduce((acc, reel) => {
            const count = acc.get(reel) || 0;
            acc.set(reel, count + 1);
            return acc;
        }, new Map<ReelSymbol, number>());

        const maxMatchingSymbolCount = Array.from(aggregatedBySymbol.values()).sort((a, b) => b - a)[0];

        // TODO: make a common type for Rule that can be composed when creating a SlotMachine
        // then rules can be executed in sequence and tested either in isolation or in combination
        if (results.every((reel) => reel === ReelSymbol.CHERRY)) {
            return {
                results,
                winnings: 500,
            };
        }
        else if (maxMatchingSymbolCount === 3) {
            return {
                results,
                winnings: 200,
            };
        }
        else if (maxMatchingSymbolCount) {
            return {
                results,
                winnings: 100,
            };
        }

        return {
            results,
            winnings: 0,
        };
    }
}
