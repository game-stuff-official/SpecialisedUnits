const bayBlade = extend(UnitType, "name", {
  spinSpeed: 2,
  clockwise: -1,
  health: 100,
  speed: 3,
  update(unit){
    this.super$update(unit);
    unit.vel().rotate(unit.rotation + Time.delta * this.spinSpeed * this.clockwise);
  }
}); 
bayBlade.defaultController = () => extend(SuicideAI, {})
bayBlade.constructor = () => extend(MechUnit, {});
