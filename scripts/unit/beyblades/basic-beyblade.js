  speed= 3;
  type: "mech";




const speeeed = extend(UnitType, "name", {\
  spinSpeed: 2,
  clockwise: -1,
  update(unit){
    this.super$update(unit);
    unit.vel().rotate(unit.rotation + Time.delta * this.spinSpeed * this.clockwise);
  }
});
