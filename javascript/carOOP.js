class Car{

    constructor(brand){
        this.brandName = brand;           // this (reference object)
    }

    present() {
        return 'I have a '+this.brandName;
      }

}


class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }
    show() {

        return this.present() + ', it is a ' + this.model;
      }
}


 myCar = new Model("Ford", "Mustang");


//  myCar.show();
console.log( myCar.show());

myCar2 = new Model("Toyota","Crown");

console.log(myCar2.show());

// Car1 = new Car("Tesla");


// console.log(Car1.brandName);