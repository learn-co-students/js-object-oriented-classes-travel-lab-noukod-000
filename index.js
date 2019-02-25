//My code
class Driver{
  constructor(name, date) {
		this.name = name;
		this.startDate = new Date(date)
	}

	yearsExperienceFromBeginningOf(year) {
    let startYear = 2019 + this.startDate.getYear()
		let today = new Date()
    return year - this.startDate.getFullYear() -1;
	}
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue) {return eastWest.indexOf(avenue);}

  blocksTravelled() {
    let horizontalTraveled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)- eastWest.indexOf(this.endingLocation.horizontal))
    let verticalTraveled =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return verticalTraveled + horizontalTraveled
  }

    estimatedTime(peak) {
      if (peak) {
          return this.blocksTravelled() / 2;
        }
        else {
          return this.blocksTravelled() / 3;
        }
      }
    }

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
