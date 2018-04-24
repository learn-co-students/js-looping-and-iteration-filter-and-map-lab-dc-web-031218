// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const revenueOver = drivers.filter(driver => driver.revenue > revenue);
  return revenueOver;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const revenueOver = drivers.filter(driver => driver.revenue > revenue);
  const names = revenueOver.map(driver => driver.name)
  return names;
}

function exactMatch(drivers, object) {
  return drivers.filter(driver => matchesObject(driver, object));
}

function matchesObject(driver, object) {
  return Object.keys(object).every(key => driver.hasOwnProperty(key) && object[key] === driver[key])
  // return drivers.filter(driver => Object.keys(object).every(key => driver.hasOwnProperty(key) && object[key] === driver[key]));
}

function exactMatchToList(drivers, object) {
  const array = exactMatch(drivers, object);
  return array.map(driver => driver.name);
}
