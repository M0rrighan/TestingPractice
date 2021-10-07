const capitalize = require('./task4');

describe('#capitalize(string) is working properly', () => {
  test('returns the correct capitalized string', () => {
    // Arrange
    const string = 'radmila';
  
    // Act
    let capitalized = capitalize(string);
  
    // Assert
    expect(capitalized).toBe('Radmila');
  });

  test('returns the correct capitalized string', () => {
    // Arrange
    const string = 'stojceva';
  
    // Act
    let capitalized = capitalize(string);
  
    // Assert
    expect(capitalized).toBe('Stojceva');
  });

  test('throws error for emtpy string', () => {
    // Act and Assert
    expect(() => capitalize('')).toThrow('No empty string allowed');
  });
});
