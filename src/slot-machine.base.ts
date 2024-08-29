import { ISlotMachine, IRollResult } from "./interfaces";
import { ReelSymbol } from "./reel-symbol.enum";

export const randomRoll = (definition: ReelSymbol[]) => {
    const randomIndex = Math.floor(Math.random() * definition.length);
    return definition[randomIndex];
}

export abstract class SlotMachine implements ISlotMachine {
    protected readonly reelDefinition: ReelSymbol[];
    protected readonly reelCount: number;
    protected readonly rollAllReels = () => Array.from({ length: this.reelCount }, () => randomRoll(this.reelDefinition));

    constructor(reelDefinition: ReelSymbol[], reelCount: number, rollStrategy?: () => ReelSymbol[]) {
        this.reelDefinition = reelDefinition;
        this.reelCount = reelCount;
        if (rollStrategy) this.rollAllReels = rollStrategy; // used by tests for deterministic results
    }

    abstract play(): Promise<IRollResult>;
}
