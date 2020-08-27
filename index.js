// Write your solution in this file!
const driver = {};

// updateDriverWithKeyAndValue(driver, key, value)
    // 1) returns a driver with the original key value pairs and the new key value pair
    // 2) it does not modify the original driver, but rather returns a clone with the new data

    function updateDriverWithKeyAndValue(obj, key, value) {
      return Object.assign({}, obj, { [key]: value });
    }

    function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
      obj[key] = value;

      return obj;
    }

    function deleteFromDriverByKey(driver, key) {
      return driver
    }
