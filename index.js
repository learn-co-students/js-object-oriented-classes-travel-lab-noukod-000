const Ave = [
  '1st Avenue',
 '2nd Avenue',
 '3rd Avenue',
 'Lexington Avenue',
 'Park',
 'Madison Avenue',
 '5th Avenue'
];
class Driver{
  constructor(name,startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
    return (endDate - this.startDate.getFullYear() -1);
  }
}

class  Route {
  constructor(beginningLocation,endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
    blocksTravelled(){
      const weE = Ave.indexOf(this.endingLocation.horizontal);
      const weB = Ave.indexOf(this.beginningLocation.horizontal);
      const NS = this.endingLocation.vertical - this.beginningLocation.vertical ;
      const WE = weE - weB;
      return WE + NS;
    }
    estimatedTime(peak){
      let bool = peak;
      let val;
      if(bool === true){
        val = this.blocksTravelled() / 2;
      }else{
        val = this.blocksTravelled() / 3;
      }
      return val;
    }
}
