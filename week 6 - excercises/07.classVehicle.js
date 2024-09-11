function vehicle(input){

    let parts = { engine: 6, power: 100 };
   
    

    class Vehicle{
        constructor(type,model,parts,fuel){

            this.type = type,
            this.model = model,
            this.parts = parts,
            this.parts.quality = this.parts.engine * this.parts.power,
            this.fuel = Number(fuel)
            

        }

        drive(fuelLoss){
            this.fuel -= fuelLoss;
        }
    }

    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);




}
vehicle()