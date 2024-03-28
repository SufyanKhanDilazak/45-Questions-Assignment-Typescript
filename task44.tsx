interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any; 
  }
  function createCar(manufacturer: string, model: string, ...rest: { [key: string]: any }[]): CarInfo {
    const carInfo: CarInfo = { manufacturer, model };
    Object.assign(carInfo, ...rest);
    return carInfo;
  }
  const car1 = createCar("Toyota", "Camry", { color: "blue", sunroof: true });
  console.log(car1);
  