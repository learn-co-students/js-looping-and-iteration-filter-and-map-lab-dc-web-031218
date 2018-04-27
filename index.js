// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
	let newDrivers = []
	drivers.map(driver =>{
		if (driver.revenue > revenue){
			newDrivers.push(driver)
		}
	});
	if (newDrivers !== []){
		return newDrivers;
	}
	else {
		return [];
	}
}

function driverNamesWithRevenueOver(drivers, revenue){
	let newDrivers = []
	drivers.map(driver =>{
		if (driver.revenue > revenue){
			newDrivers.push(driver.name)
		}
	});
	if (newDrivers !== []){
		return newDrivers;
	}
	else {
		return [];
	}
}

function exactMatch(drivers, object){
	return drivers.filter(driver =>{
		return driver.name === object.name || driver.revenue === object.revenue
	});
}

function exactMatchToList(drivers, object){
	let exact = drivers.filter(driver => {
		return driver.name === object.name || driver.revenue == object.revenue
	})
	if (exact === []){
		return [];
	} else{
		return exact.map(object => object.name)
	}
}