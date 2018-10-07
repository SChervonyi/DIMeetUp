import { Engine } from "./engine";

export class Car {
    constructor(private engine: Engine) {
    }

    public addSpeed(value: number) {
        this.engine.boost(value);
    }
}