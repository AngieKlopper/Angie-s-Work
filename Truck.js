class Truck {
    constructor(color, size, type){
        this.color = color
        this.size = size
        this.label = type
    }
    addCargo(cargo){
        this.cargo = cargo
    }
}

var truck = new Truck("Black", "2500", "4X4 Dodge")
console.log (truck)
truck.addCargo("Dead Bodies")
console.log (truck)