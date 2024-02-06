class Abc{
    sum(){
        var num1 =5;
        var num2 =6;
        console.log(num1+num2 + "this is abc class method");
    }
    // sum(a,b){
    //     var num1 = a;
    //     var num2 =b;
    //     console.log(num1+num2);

    // }
    // sum(a){
    //     var num1 = a;
    //     var num2 =5;
    //     console.log(num1+num2);

    // }
    
}

class xyz extends Abc{
    sum(){
        var num1 = 11;
        var num2 =5;
        console.log(num1+num2 + "this is cyzx class method");

    }
}


abc = new Abc();
abc.sum();

Xyz = new xyz();
Xyz.sum();
// abc.sum(10,10);