const speeeed = extend(UnitType, "name", {\
  spinSpeed: 2,
  clockwise: -1,
  update(unit){
    this.super$update(unit);
    unit.vel().rotate(unit.rotation + Time.delta * this.spinSpeed * this.clockwise);
  }
});

define an object {
  object:usefull
  function (this is a method) {
  return jiafshiosh * this is a method
  }
  
}
