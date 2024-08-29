import { DefaultSlotMachine } from "./default-slot-machine";
import { ReelSymbol } from "./reel-symbol.enum";
import { IRollResult } from "./interfaces";

function main(): Promise<IRollResult> {
    const slotMachine = new DefaultSlotMachine(
        [
            ReelSymbol.BAR,
            ReelSymbol.BELL,
            ReelSymbol.CHERRY,
        ], 3);
    return slotMachine.play();
}

main()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
