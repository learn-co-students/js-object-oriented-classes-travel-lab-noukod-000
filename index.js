class Driver{
  constructor(name,startDate){
    this.name=name;
    this.startDate=new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear){
    return (endYear-this.startDate.getFullYear())-1;
  }
}


class Route{

  constructor(startingBlock,endingBlock){
    this.startingBlock=startingBlock;
    this.endingBlock=endingBlock;
  }

  blocksTravelled(){
    let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
    ];

    let avenueDistance=Math.abs(eastWest.indexOf(this.startingBlock.horizontal)-eastWest.indexOf(this.endingBlock.horizontal))
    let streetDistance=Math.abs(this.startingBlock.vertical-this.endingBlock.vertical)

    return avenueDistance+streetDistance;
  }

  estimatedTime(peakHours){
    // off Peak hours : 3 block/minute
    // peak hours : 2 block/minute
    return peakHours ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
  }
}
