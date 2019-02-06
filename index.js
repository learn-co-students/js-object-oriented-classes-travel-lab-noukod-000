
class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endYear){
   return endYear - this.startDate.getFullYear() -1;
  }
}
