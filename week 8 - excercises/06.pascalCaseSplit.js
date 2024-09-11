function pascal(input){

    input = input.split(/(?=[A-Z])/);

    console.log(input.join(", "));

}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')