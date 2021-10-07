const reverseString = require('./task2');

describe('#reverseString(string) is working properly', () => {
  test('returns the correct reversed string', () => {
    // Arrange
    const string = 'Radmila';
  
    // Act
    let reversed = reverseString(string);
  
    // Assert
    expect(reversed).toBe('alimdar');
  })

  test('returns the correct reversed string', () => {
    // Arrange
    const string = 'Stojceva';
  
    // Act
    let reversed = reverseString(string);
  
    // Assert
    expect(reversed).toBe('avecjots');
  })

  test('throws error for emtpy string', () => {
    // Act and Assert
    expect(() => stringLength('')).toThrow(Error);
  })
})
