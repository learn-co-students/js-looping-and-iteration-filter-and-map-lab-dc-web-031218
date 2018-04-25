// Code your solution here:
function driversWithRevenueOver(list, revenue) {
  let a = list.filter(function (x) { return x["revenue"] > revenue });
  return a
}

function driverNamesWithRevenueOver(list, revenue) {
  let a = this.driversWithRevenueOver(list, revenue);
  let b = a.map(function (x) {return x["name"]});
  return b;
}

function exactMatch(list, obj) {
  let objPreKey = Object.keys(obj);
  let objKey = objPreKey[0];
  let objVal = obj[objKey];
  let a = list.filter(function (x) { return x[objKey] === objVal });
  return a;
}

function exactMatchToList(list, obj) {
  let a = this.exactMatch(list, obj);
  let b = a.map(function (x) {return x["name"]});
  return b;
}
