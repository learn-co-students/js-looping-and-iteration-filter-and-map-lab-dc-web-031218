// Code your solution here:
const drivers = [];
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(
    function(driver) {
      if (driver.revenue >= revenue) {
        return driver;
      }
    }
  )
}

function driverNamesWithRevenueOver(drivers, revenue) {
    driversArray = drivers.filter(
      function(drivers) {
        if (drivers.revenue > revenue) {
          return drivers.name;
        }
      }
    )
    let mapDriversArray = driversArray.map (x => x['name'])
    return mapDriversArray;
}

function exactMatch(driver, obj) {
  return driver.filter(
    function(driver) {
      if (driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]) {
        return driver;
      }
    }
  )
}

function exactMatchToList(driver, obj) {
  filterArray = driver.filter(
    function(driver) {
      if (driver[Object.keys(obj)[0]] === obj[Object.keys(obj)[0]]) {
        return driver;
      }
    }
  )
  let finalArray = filterArray.map (x => x['name'])
  return finalArray;
}
