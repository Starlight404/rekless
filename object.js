const car ={
  name: "audi",
  model:" r8 ",
  year: " 2020",
  weight: "1000",
  color: "black",

  start: function(){
    console.log("car has started");
  },
  drive:function(){
    console.log("i love to drive the audi r8");

  },
  

}
console.log(car.name);
console.log(car.model);
console.log(car['weight']);
car.start();
