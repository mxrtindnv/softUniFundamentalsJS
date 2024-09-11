function trainPassengers(input) {

   let wagons = input
      .shift()
      .split(` `)
      .map(Number)


   let maxCapacity = Number(input[0])


   for (let i = 1; i < input.length; i++) {
      let command = input[i];

      if (command.length > 3) {
         let [addition, num]
            = command.split(` `);

         num = Number(num);

         wagons.push(num)




      } else {
         command = Number(command)
         for (let a = 0; a < wagons.length; a++) {

            let currentNum = Number(wagons[a]);
            let sum = command + currentNum;
            
            if (sum <= maxCapacity) {

               wagons[a] += command
               break;
            }

         }
      }
   }



   console.log(wagons.join(` `));











}
trainPassengers(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6']);