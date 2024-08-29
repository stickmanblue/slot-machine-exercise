import { RollResult } from "./roll-result.interface";

export interface ISlotMachine {
    play(): Promise<RollResult>;
}
