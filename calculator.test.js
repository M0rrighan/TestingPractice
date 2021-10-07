const Calculator = require('./calculator');

describe('#add(x, y) is working properly', () => {
  // Arrange
    let calculate = new Calculator();

  test('is returning the correct sum', () => {
    // Act and Assert
    expect(calculate.add(22, 13)).toEqual(35);
    expect(calculate.add(35, 35)).toEqual(70);
    expect(calculate.add(2, 1)).toEqual(3);
  });
  test('is returning the correct sum', () => {
    // Act and Assert
    expect(calculate.add(0, 35)).toEqual(35);
    expect(calculate.add(35, 0)).toEqual(35);
    expect(calculate.add(0, 0)).toEqual(0);
  });
  test('is returning the correct sum', () => {
    // Act and Assert
    expect(parseInt(calculate.add(5.375, 29.625), 10)).toEqual(35);
    expect(parseInt(calculate.add(5.37525, 29.62575), 10)).toEqual(35);
    expect(parseInt(calculate.add(5.3753, 29.6247), 10)).toEqual(35);
  });

  test('is returning the correct sum when x or y or both are numerical values passed as string', () => {
    // Act and Assert
    expect(calculate.add('0', '35')).toEqual(35);
    expect(calculate.add('35', 0)).toEqual(35);
    expect(calculate.add(0, '0')).toEqual(0);
  });

  test('is throwing error if x or y or both cannot be converted to numbers', () => {
    // Act and Assert
    expect(() => calculate.add('a', 30)).toThrow('both attributs must be numbers');
    expect(() => calculate.add(5, 'a')).toThrow('both attributs must be numbers');
    expect(() => calculate.add('a', 'b')).toThrow('both attributs must be numbers');
  });
});

describe('#subtract(x, y) is working properly', () => {
  // Arrange
    let calculate = new Calculator();

  test('is returning the correct difference', () => {
    // Act and Assert
    expect(calculate.subtract(22, 13)).toBe(9);
    expect(calculate.subtract(35, 35)).toBe(0);
    expect(calculate.subtract(2, 1)).toBe(1);
  });
  test('is returning the correct difference', () => {
    // Act and Assert
    expect(calculate.subtract(0, 35)).toBe(-35);
    expect(calculate.subtract(35, 0)).toBe(35);
    expect(calculate.subtract(0, 0)).toBe(0);
  });
  test('is returning the correct difference', () => {
    // Act and Assert
    expect(calculate.subtract(29.625, 5.375)).toBe(24.25);
    expect(calculate.subtract(29.62575, 5.37525)).toBe(24.2505);
    expect(calculate.subtract(29.6247, 5.3753)).toBe(24.2494);
  });

  test('is returning the correct difference when x or y or both are numerical values passed as string', () => {
    // Act and Assert
    expect(calculate.subtract('0', '35')).toEqual(-35);
    expect(calculate.subtract('35', 0)).toEqual(35);
    expect(calculate.subtract(0, '0')).toEqual(0);
    expect(calculate.subtract('22', 13)).toEqual(9);
  });

  test('is throwing error if x or y or both cannot be converted to numbers', () => {
    // Act and Assert
    expect(() => calculate.subtract('a', 30)).toThrow('both attributs must be numbers');
    expect(() => calculate.subtract(5, 'a')).toThrow('both attributs must be numbers');
    expect(() => calculate.subtract('a', 'b')).toThrow('both attributs must be numbers');
  });
});

describe('#divide(x, y) is working properly', () => {
  // Arrange
    let calculate = new Calculator();

  test('is returning the correct quotient', () => {
    // Act and Assert
    expect(calculate.divide(20, 2)).toBe(10);
    expect(calculate.divide(100, 5)).toBe(20);
    expect(calculate.divide(21, 3)).toBe(7);
  });
  test('is returning the correct quotient', () => {
    // Act and Assert
    expect(calculate.divide(37.5, 3)).toBe(12.5);
    expect(calculate.divide(444.444, 5)).toBe(88.8888);
    expect(calculate.divide(56.1, 2.4)).toBe(23.375);
  });
  test('is returning the correct quotient', () => {
    // Act and Assert
    expect(calculate.divide(0, 35)).toBe(0);
    expect(() => calculate.divide(35, 0)).toThrow('cannot devide by zero');
    expect(() => calculate.divide(0, 0)).toThrow('cannot devide by zero');
  });

  test('is returning the correct quotient when x or y or both are numerical values passed as string', () => {
    // Act and Assert
    expect(calculate.divide('20', '2')).toEqual(10);
    expect(calculate.divide('35', 1)).toEqual(35);
    expect(calculate.divide('444.444', 5)).toEqual(88.8888);
  });

  test('is throwing error if x or y or both cannot be converted to numbers', () => {
    // Act and Assert
    expect(() => calculate.divide('a', 30)).toThrow('both attributs must be numbers');
    expect(() => calculate.divide(5, 'a')).toThrow('both attributs must be numbers');
    expect(() => calculate.divide('a', 'b')).toThrow('both attributs must be numbers');
  });

  describe('#multiply(x, y) is working properly', () => {
    // Arrange
      let calculate = new Calculator();
  
    test('is returning the correct product', () => {
      // Act and Assert
      expect(calculate.multiply(20, 13)).toBe(260);
      expect(calculate.multiply(35, 35)).toBe(1225);
      expect(calculate.multiply(2, 1)).toBe(2);
    });
    test('is returning the correct product', () => {
      // Act and Assert
      expect(calculate.multiply(0, 35)).toBe(0);
      expect(calculate.multiply(35, 0)).toBe(0);
      expect(calculate.multiply(0, 0)).toBe(0);
    });
    test('is returning the correct product', () => {
      // Act and Assert
      expect(calculate.multiply(9.625, 5.375)).toBe(51.734375);
      expect(calculate.multiply(3.62575, 5.37525)).toBe(19.4893126875);
      expect(calculate.multiply(3.6247, 5.3753)).toBe(19.48384991);
    });
  
    test('is returning the correct product when x or y or both are numerical values passed as string', () => {
      // Act and Assert
      expect(calculate.multiply('0', '35')).toEqual(0);
      expect(calculate.multiply('35', 2)).toEqual(70);
      expect(calculate.multiply(30, '0')).toEqual(0);
      expect(calculate.multiply('20', 13)).toEqual(260);
    });
  
    test('is throwing error if x or y or both cannot be converted to numbers', () => {
      // Act and Assert
      expect(() => calculate.multiply('a', 30)).toThrow('both attributs must be numbers');
      expect(() => calculate.multiply(5, 'a')).toThrow('both attributs must be numbers');
      expect(() => calculate.multiply('a', 'b')).toThrow('both attributs must be numbers');
    });
  });
});
