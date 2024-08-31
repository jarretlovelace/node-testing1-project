const {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
} = require('./index');

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    const obj = { name: '  jane  ', age: '  30  ' };
    const result = trimProperties(obj);
    expect(result).toEqual({ name: 'jane', age: '30' });
  });

  test('[2] returns a copy, leaving the original object intact', () => {
    const obj = { name: '  jane  ', age: '  30  ' };
    const result = trimProperties(obj);
    expect(result).toEqual({ name: 'jane', age: '30' });
    expect(obj).toEqual({ name: '  jane  ', age: '  30  ' }); // original object remains unchanged
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] mutates the original object and trims its properties', () => {
    const obj = { name: '  jane  ', age: '  30  ' };
    const result = trimPropertiesMutation(obj);
    expect(result).toEqual({ name: 'jane', age: '30' });
    expect(obj).toEqual({ name: 'jane', age: '30' }); // obj was mutated
  });
});


describe('[Exercise 3] findLargestInteger', () => {
  test('[4] returns the largest number in an array of objects { integer: 2 }', () => {
    const integers = [{ integer: 1 }, { integer: 3 }, { integer: 2 }];
    const result = findLargestInteger(integers);
    expect(result).toBe(3);
  });
});

describe('[Exercise 4] Counter', () => {
  test('[5] the FIRST CALL of counter.countDown returns the initial count', () => {
    const counter = new Counter(3);
    expect(counter.countDown()).toBe(3);
  });

  test('[6] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const counter = new Counter(3);
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });

  test('[7] the count eventually reaches zero but does not go below zero', () => {
    const counter = new Counter(3);
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toBe(0);
    expect(counter.countDown()).toBe(0); // does not go below zero
  });
});

describe('[Exercise 5] Seasons', () => {
  test('[8] the FIRST call of seasons.next returns "summer"', () => {
    const seasons = new Seasons();
    expect(seasons.next()).toBe('summer');
  });

  test('[9] the SECOND call of seasons.next returns "fall"', () => {
    const seasons = new Seasons();
    seasons.next();
    expect(seasons.next()).toBe('fall');
  });

  test('[10] the THIRD call of seasons.next returns "winter"', () => {
    const seasons = new Seasons();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe('winter');
  });

  test('[11] the FOURTH call of seasons.next returns "spring"', () => {
    const seasons = new Seasons();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe('spring');
  });

  test('[12] the FIFTH call of seasons.next returns again "summer"', () => {
    const seasons = new Seasons();
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe('summer'); // cycles back to summer
  });

  test('[13] the 40th call of seasons.next returns "spring"', () => {
    const seasons = new Seasons();
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toBe('spring');
  });
});

describe('[Exercise 6] Car', () => {
  test('[14] driving the car returns the updated odometer', () => {
    const car = new Car('focus', 20, 30);
    expect(car.drive(100)).toBe(100);
    expect(car.drive(500)).toBe(600); // car can drive up to 600 miles
    expect(car.drive(100)).toBe(600); // no more fuel
  });

  test('[15] driving the car uses gas', () => {
    const car = new Car('focus', 20, 30);
    car.drive(300);
    expect(car.tank).toBe(10); // half the tank used up
  });

  test('[16] refueling allows to keep driving', () => {
    const car = new Car('focus', 20, 30);
    car.drive(600);
    expect(car.refuel(10)).toBe(300); // refuels partially
    expect(car.refuel(20)).toBe(600); // refuels fully
  });

  test('[17] adding fuel to a full tank has no effect', () => {
    const car = new Car('focus', 20, 30);
    expect(car.refuel(10)).toBe(600); // already full
  });
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[18] resolves true if passed an even number', async () => {
    const result = await isEvenNumberAsync(2);
    expect(result).toBe(true);
  });

  test('[19] resolves false if passed an odd number', async () => {
    const result = await isEvenNumberAsync(3);
    expect(result).toBe(false);
  });
});
