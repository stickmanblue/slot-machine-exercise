import { DefaultSlotMachine } from "./default-slot-machine";
import { RollResult } from "./roll-result.interface";

function main(): Promise<RollResult> {
    const slotMachine = new DefaultSlotMachine();
    return slotMachine.play();
}

main()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
