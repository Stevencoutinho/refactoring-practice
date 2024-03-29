class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustments = [];
  }
  get production() {
    assert(
      this._productionAccumulator === this.calculatedProductionAccumulator
    );
    return this._initialProduction + this._productionAccumulator;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }

  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
}
