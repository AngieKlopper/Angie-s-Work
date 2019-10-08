function Shop(){
    this.construct = function(builder){
        builder.step1();
        builder.step2();
        return builder.get();

    }
}


function carBuilder(){
    this.car = null;
    this .step1 = function(){
        this.car = new Car();
    };
    this.step2 = function(){
        this.car.addParts();
    };
    this.get = function(){
        return this.car;
    };
}

function truckBuilder(){
    this.truck = null;
    this .step1 = function(){
        this.car = new Truck();
    };
    this.step2 = function(){
        this.truck.addParts();
    };
    this.get = function(){
        return this.truck;
    };
}

function car(){
    this.doors = 0;
    this.addParts = function(){
        this.doors = 4;

    };
    this.say = function(){
        console.log("I'm a " + this.doors + "-door Car");
    };
}

function truck(){
    this.doors = 0;
    this.addParts = function(){
        this.doors = 4;
    };
    this.say = function(){
        console.log("I'm a " +  this.doors +"-door Truck");
    };
}

//Helper

function run(){
    var shop = new Shop();
    var Carbuilder = carBuilder();
    var Truckbuilder = truckBuilder();
    var car = shop.construct(Carbuilder);
    var truck = shop.construck(Truckbuilder); 
    
    car.say();
    truck.say();

}

run();

