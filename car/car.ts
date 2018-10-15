
export class Car {
  constructor(private engine: Engine) { }

  public addSpeed(value: number) {
    this.engine.boost(value);
  }

  public fillTank(fuel: Fuel) { /* */ }
}

export class Engine {

  constructor(private engineCylinder: EngineCylinder) { }

  public boost(value: number) { /* */ }
}

export class Fuel { /* */ }

export class EngineCylinder {
  public push() { /* */ }
}
