export function minBy(array, cb) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
      }
    
    let minElement = array[0];
    let minValue = cb(minElement);
    
    for (let i = 1; i < array.length; i++) {
        const value = cb(array[i]);
        if (value < minValue) {
            minElement = array[i];
            minValue = value;
        }
    }
    
    return minElement;
}

export function maxBy(array, cb) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
      }
    
      let maxElement = array[0];
      let maxValue = cb(maxElement);
    
      for (let i = 1; i < array.length; i++) {
        const value = cb(array[i]);
        if (value > maxValue) {
          maxElement = array[i];
          maxValue = value;
        }
      }
    
      return maxElement;
}
