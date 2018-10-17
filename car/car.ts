
export class Car {
  constructor(private engine: Engine) { }

  public addSpeed(value: number) {
    this.engine.boost(value);
  }

  public fillTank(fuel: Fuel) { /* logic */ }
}

export class Engine {

  constructor(private engineCylinder: EngineCylinder) { }

  public boost(value: number) { /* logic */ }
}

export class Fuel { /* logic */ }

export class EngineCylinder {
  public push() { /* logic */ }
}
