const unit = extend(UnitType, "basic-bayblade", {
  update(unit){
    this.super$update(unit);
    unit.vel().rotate(unit.rotation + Time.delta * this.spinSpeed * this.clockwise);
  }
});
unit.constructor = () => extend(MechUnit, {});
unit.defaultController = () => extend(SuicideAi, {});
