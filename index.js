// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers,revenue){
  return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver.name;});
}

function exactMatch(drivers,attrval){
  return drivers.filter(function(driver){
    return driver[Object.keys(attrval)[0]]===Object.values(attrval)[0];
  });
}

function exactMatchToList(drivers,attrval){
  return exactMatch(drivers,attrval).map(function(driver){return driver.name;});
}
