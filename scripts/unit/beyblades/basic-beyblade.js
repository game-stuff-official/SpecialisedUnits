const speeeed = extend(UnitType, "name", {
  spinSpeed: 2,
  clockwise: -1,
  health: 100,
  speed: 3,
  update(unit){
    this.super$update(unit);
    unit.vel().rotate(unit.rotation + Time.delta * this.spinSpeed * this.clockwise);
  }
}); 
speeeed.defaultController = () => extend(SuicideAI, {})
speeeed.constructor = () => extend(MechUnit, {});
