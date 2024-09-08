class Lamp {
    isOn: boolean;
    isWarm: boolean;

    constructor() {
        this.isOn = false;
        this.isWarm = false;
    }

    turnOn() {
        this.isOn = true;
        this.isWarm = true;
    }

    turnOff() {
        this.isOn = false;
    }
}

class Switch {
    isOn: boolean;
    lamp: Lamp;

    constructor() {
        this.isOn = false;
        this.lamp = new Lamp;
    }

    turnOn() {
        this.isOn = true;
        this.lamp.turnOn();
    }

    turnOff() {
        this.isOn = false;
        this.lamp.turnOff();
    }
}

class LightSwitchPuzzle {
    switchs: Switch[];


    constructor() {
        this.switchs = [new Switch(), new Switch(), new Switch()];
    }

    usingTheSwitch() {
        this.switchs[0].turnOn();
        console.log("Interruptor A está ligado e aquece a lâmpada.");

        this.switchs[0].turnOff();
        console.log("Interruptor A é desligado.");

        this.switchs[1].turnOn();
        console.log("Interruptor B está ligado.");
    }

    selectRandomRoom() {
        const randomIndex = Math.floor(Math.random() * this.switchs.length);
        const selectedSwitch = this.switchs[randomIndex];
        console.log(`Sala ${randomIndex + 1} foi selecionada.`);
        console.log(`Lâmpada ${selectedSwitch.lamp.isOn ? "ligada" : "desligada"} e ${selectedSwitch.lamp.isWarm ? "quente" : "fria"}.\n`);
    }

    conclusion() {
        this.switchs.forEach((sw, index) => {
            if (sw.lamp.isOn && sw.lamp.isWarm) {
                console.log(`Interruptor B controla lâmpada ${index + 1}`)
            }

            if (sw.lamp.isOn === false && sw.lamp.isWarm) {
                console.log(`Interruptor A controla lâmpada ${index + 1}`)
            }

            if (sw.lamp.isOn === false && sw.lamp.isWarm === false) {
                console.log(`Interruptor C controla lâmpada ${index + 1}`)
            }
        });
    }
}

const puzzle = new LightSwitchPuzzle();
puzzle.usingTheSwitch();
console.log("\n--- Indo à sala das lâmpadas ---\n");
puzzle.selectRandomRoom();
puzzle.selectRandomRoom();
console.log("\n--- Conclusão ---\n");
puzzle.conclusion();