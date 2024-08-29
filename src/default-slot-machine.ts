import { ReelSymbol } from "./reel-symbol.enum";
import { RollResult } from "./roll-result.interface";
import { ISlotMachine } from "./slot-machine.interface";

export const randomRoll = (definition: ReelSymbol[]) => {
    const randomIndex = Math.floor(Math.random() * definition.length);
    return definition[randomIndex];
}

export class DefaultSlotMachine implements ISlotMachine {
    private readonly reelDefinition: ReelSymbol[] = [
        ReelSymbol.BAR,
        ReelSymbol.BELL,
        ReelSymbol.CHERRY,
    ];

    private readonly reelCount: number = 3;

    async play(): Promise<RollResult> {

        const results: ReelSymbol[] = Array.from({ length: this.reelCount }, () => randomRoll(this.reelDefinition));

        const countBySymbol = results.reduce((acc, reel) => {
            const count = acc.get(reel) || 0;
            acc.set(reel, count + 1);
            return acc;
        }, new Map<ReelSymbol, number>());

        // Rules
        if (results.every((reel) => reel === ReelSymbol.CHERRY)) {
            return {
                results,
                winnings: 500,
            };
        }
        else if (Array.from(countBySymbol.values()).some((count) => count >= 3)) {
            return {
                results,
                winnings: 200,
            };
        }
        else if (Array.from(countBySymbol.values()).some((count) => count >= 2)) {
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
