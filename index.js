// Code your solution in this file!
function distanceFromHqInBlocks(distBlocks) {
    //returns the number of blocks given a value
    return Math.abs(42 - distBlocks)

}



function distanceFromHqInFeet(distBlocks) {
   return distanceFromHqInBlocks(distBlocks) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,

    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    
    // the return value of distanceFromHqInBlocks can then be used to calculate feet

  }


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start - destination) * 264;
}
 

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264

    if(distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
     
    }
    //returns the fare for the customer
    
}
