const stringLength = require('./task1');

describe('#stringLength(string) is working properly', () => {
  test('returns the correct lenght of a given string', () => {
    // Arrange
    const string = 'Radmila';
  
    // Act
    let length = stringLength(string);
  
    // Assert
    expect(length).toBe(7);
  })

  test('returns the correct lenght of a given string', () => {
    // Arrange
    const string = 'Stojceva';
  
    // Act
    let length = stringLength(string);
  
    // Assert
    expect(length).toBe(8);
  })

  test('throws error for string more than 10 characters long', () => {
    // Arrange
    const string = 'qwertyuiopa';
    
    // Act and Assert
    expect(() => stringLength(string)).toThrow(Error);
  })

  test('throws error for empty string', () => {
    // Arrange
    const string = '';
    
    // Act and Assert
    expect(() => stringLength(string)).toThrow(Error);
  })
})
