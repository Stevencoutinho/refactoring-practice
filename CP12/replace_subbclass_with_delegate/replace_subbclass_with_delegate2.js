function createBird(data) {
  switch (data.type) {
    case "NorwegianBlueParrot":
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }
  get name() {
    return this._name;
  }
  get plumage() {
    return this._plumage || "average";
  }
  get airSpeedVelocity() {
    return this._speciesDelegate
      ? this._speciesDelegate.airSpeedVelocity
      : null;
  }
  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "EuropeanSwallow":
        return new EuropeanSwallowDelegate();
      case "AfricanSwallow":
        return new AfricanSwallowDelegate(data);
      case "NorwegianBlueParrot":
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return null;
    }
  }
}

class SpeciesDelegate {
  constructor(data, bird) {
    this._bird;
  }
  get plumage() {
    return this._bird.plumage || "average";
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    return this._speciesDelegate.plumage;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get plumage() {
    if (this._voltage > 100) return "scorched";
    else return this._bird.plumage || "beautiful";
  }
  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}
