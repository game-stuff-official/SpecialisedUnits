const unit = extend(UnitType, "basic-beyblade", {
  spinSpeed: 3;
  clockwise: -1;
  update(unit){
    this.super$update(unit);
    unit.vel().rotate(unit.rotation + Time.delta * this.spinSpeed * this.clockwise);
  }
});
unit.constructor = () => extend(MechUnit, {});
unit.defaultController = () => extend(SuicideAi, {});
