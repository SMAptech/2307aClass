class Animal{
    constructor(color,breed){
        this.color = color;
        this.breed = breed;
    }
    
    parentClass(){
        // console.log( "Animal color is " + this.color + " and breed is " + this.breed);  // Animal color is -- and breed is -- 
        return "Animal color is " + this.color + " and breed is " + this.breed;  // Animal color is -- and breed is -- 
        
    }

}

class petAnimals extends Animal{
    constructor(color,breed,name,vaccination){
        super(color,breed);
        this.petName = name;
        this.isVaccinated = vaccination;
    }
    petDetails(){
        return this.parentClass() + " pet name is "+this.petName + "and is vaccinated"+ this.isVaccinated  ;
    }
}


petAnimal1 = new petAnimals("brown","german","shanto","YES");
// console.log(petAnimal1);
document.write(petAnimal1.petDetails());

petAnimal2 = new petAnimals("black","pitbull","cutie","NO");
// console.log(petAnimal2.parentClass());
document.write("<br>");
document.write(petAnimal2.petDetails());
