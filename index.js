function driversWithRevenueOver(drivers, rev){
  const newList = drivers.filter(function (driver)
  { return driver.revenue > rev});
    return newList;
}

function driverNamesWithRevenueOver(drivers, rev){
  const newList = drivers.filter(function (driver)
  { return driver.revenue > rev});
    const names = newList.map(function (driver){
      return driver.name;
    });
  return names;
}

function exactMatch(drivers, obj){
  const matches = drivers.filter(function (driver){
    const key = Object.keys(obj)[0];
    return driver[key] === obj[key];
  })
  return matches

}

function exactMatchToList(drivers, obj){
  const matches = drivers.filter(function (driver){
    const key = Object.keys(obj)[0];
    console.log(key)
    return driver[key] === obj[key];
  })
  return matches.map(function (match) {return match.name} )
}
