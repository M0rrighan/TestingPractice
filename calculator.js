class Calculator {
  add(x, y) {
    const res = parseFloat(x, 10) + parseFloat(y, 10);
    if(Number.isNaN(res)) {
      throw new Error('both attributs must be numbers');
    }
    return res;
  }

  subtract(x, y) {
    const res = parseFloat(x, 10) - parseFloat(y, 10);
    if(Number.isNaN(res)) {
      throw new Error('both attributs must be numbers');
    }
    return res;
  }
  
  divide(x, y) {
    if(y === 0) throw new Error('cannot devide by zero');
    const res = parseFloat(x, 10) / parseFloat(y, 10);
    if(Number.isNaN(res)) {
      throw new Error('both attributs must be numbers');
    }
    return res;
  }

  multiply(x, y) {
    const res = parseFloat(x, 10) * parseFloat(y, 10);
    if(Number.isNaN(res)) {
      throw new Error('both attributs must be numbers');
    }
    return res;
  }  
}

module.exports = Calculator;
