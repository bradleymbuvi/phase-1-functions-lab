// Code your solution in this file!
const distanceFromHqInBlocks = (location)=>Math.abs(42-location);

const distanceFromHqInFeet =(location)=>distanceFromHqInBlocks(location)*264;

const distanceTravelledInFeet = (beginning,destination)=>Math.abs(destination-beginning)*264;
const calculatesFarePrice = (start, destination)=>

    {   
        if (distanceTravelledInFeet(start,destination) >2500){
           return 'cannot travel that far'
    }   else if(distanceTravelledInFeet(start,destination)>2000){
           return 25;
    }
        let i = distanceTravelledInFeet(start,destination)-400;

            if ( i > 0){
                return i * 0.02 ;
            }

            return 0;
            }
