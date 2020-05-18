class ExtendedJS {
  constructor(){
    this.init()
  }
  
  init() {
    // [-] Array Prototypes
    // Shuffle
    Array.prototype.shuffle = function(){
      for (let i = 0; i < this.length; i++) {
        const x = Math.floor(Math.random()*(i + 1));
        [this[i], this[x]] = [this[x], this[i]];
      }
      
      return this;
    }
    
    // Random
    Array.prototype.random = function(){
      return this[Math.floor(Math.random()*this.length)];
    }
    
    // Getting unique array
    Array.prototype.getUnique = function(){
      return this.filter((x, y, z) => z.indexOf(x) === y);
    }
    
    // toObject
    Array.prototype.toObject = function(){
      return { ...this };
    }
    
    // Clear
    Array.prototype.clear = function(){
      this.length = 0;
      return this;
    }
    
    // Difference
    Array.prototype.diff = function(other){
      let x    = [],
          diff = [];
      
      for(var i = 0; i < this.length; i++) x[this[i]] = true;

      for(var i = 0; i < other.length; i++) {
        if (x[other[i]]) delete x[other[i]];
        else x[other[i]] = true;
      }
  
      for(var y in x) diff.push(y);

      return diff.slice(0, diff.length-13);
    }
    
    // Equal
    Array.prototype.equal = function(other){
      if (this.length !== other.length) return false;

      let array = this.sort();
      let array2 = other.sort();

      for (var i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) return false;
      }

      return true;
    }
    
    // Remove element by Index
    Array.prototype.removeByIndex = function(index){
      delete this[index];
      return this.filter(x => x);
    }
    
    // Remove elements by Indexes
    Array.prototype.removeByIndexes = function(){
      let args = Array.from(arguments);
      for(var x of args) {
        delete this[x];
      }
      
      return this.filter(x => x);
    }
    
    // Remove element by Value
    Array.prototype.removeByValue = function(value){
      delete this[this.indexOf(value)];
      return this.filter(x => x);
    }
    
    // Remove elements by Values
    Array.prototype.removeByValues = function(){
      let args = Array.from(arguments);
      for(var x of args) {
        delete this[this.indexOf(x)];
      }
      
      return this.filter(x => x);
    }
    
    // Edit by Index
    Array.prototype.editByIndex = function(index, newValue){
      this[index] = newValue;
      return this;
    }
    
    // Edit by Value
    Array.prototype.editByValue = function(value, newValue){
      this[this.indexOf(value)] = newValue;
      return this;
    }
    // [-] Array Prototypes
    
    // [-] Object Properties
    // Remove Key
    Object.defineProperty(Object, 'removeKey', {
      value: function(object, keyToRemove) {
        return Object.keys(object).filter(x => x != keyToRemove).reduce((obj, key) => { obj[key] = object[key];return obj }, {});
      }
    })
    
    // Remove Keys
    Object.defineProperty(Object, 'removeKeys', {
      value: function(object, keysToRemove) {
        return _removeByValues(Object.keys(object), keysToRemove).reduce((obj, key) => { obj[key] = object[key];return obj }, {});
      }
    })
    
    function _removeByValues(arr1, arr2) {
      let args = arr2;
      for(var x of args) {
        delete arr1[arr1.indexOf(x)];
      }
      
      return arr1.filter(x => x);
    }
    
    // toArray
    Object.defineProperty(Object, 'toArray', {
      value: function(object) {
        return Object.keys(object).map((key) => [key, object[key]]);
      }
    })
    
    // Clear
    Object.defineProperty(Object, 'clear', {
      value: function(object) {
        return Object.removeKeys(object, Object.keys(object));
      }
    })
    
    // Equal
    Object.defineProperty(Object, 'equal', {
      value: function(obj, obj2) {
        return JSON.stringify(obj) == JSON.stringify(obj2);
      }
    })
    
    // isObject
    Object.defineProperty(Object, 'isObject', {
      value: function(object) {
        return typeof object == "object" ? !Array.isArray(object) : false;
      }
    })
    
    // Random
    Object.defineProperty(Object, 'random', {
      value: function(object) {
        return Object.toArray(object).random()[1];
      }
    })
    
    // First
    Object.defineProperty(Object, 'first', {
      value: function(object) {
        return object[Object.keys(object)[0]];
      }
    })
    
    // Last
    Object.defineProperty(Object, 'last', {
      value: function(object) {
        return object[Object.keys(object)[Object.keys(object).length-1]];
      }
    })

    // [-] Object Properties
  }
}

module.exports = ExtendedJS