/* 1
   @func myMap
   @param arr {array}
   @param cb {function}
   @returns {array}
   @desc - Given an array, return a new array with every element transformed by the callback.
           The callback takes only one parameter - the current element of the array.

           This is essentially asking you to implement the native javascript Array.map 
           method
   @example - 
      myMap([1,2,3,4,5], (currentElement) => {
        return currentElement ** 2;
      }); // [1, 4, 9, 16, 25] 
      myMap(["Javascript", "C++", "Python"], (currentElement) => {
        return `${currentElement} is awesome!`;
      }); // ["Javascript is awesome!", "C++ is awesome!", "Python is awesome!"]
*/

/* 2
@func findInArray
   @param arr {array}
   @param needle {anything}
   @returns {boolean}
   @desc - Given an array, check to see if any element in the array is equal to what is passed in
           to `needle`. If value of `needle` is found in array, return true. Else, false

   @example - 
      findInArray([1,2,3,4,5], 5); // true
      findInArray(["Javascript", "C++", "Python"], "Ruby"); // false
*/

/* 3
    Define a @class called Person
    With @properties: name, age
    With @methods: 
        greeting() // Returns the Person's profile. Eg. "Hello, I am Taq, I am 28 years old"
    @example - 
            const taq = new Person('Taq', 28);
            const mo = new Person('Mo', 25);
            taq.greeting(); // "Hello, I am Taq, I am 28 years old."
            mo.greeting(); // "Hello, I am Mo, I am 25 years old."
*/

/* 4
    Define a @class called Family
    With @properties: lastName, members
    With @methods: 
        addMember(name, age) // Adds Person to the list of members for this cohort
        getChildren() // Returns all the members of this Family who are less than the age 12
        desc() // Returns a summary of the family, including names and ages of each member (see below for example)
        
    @example - 
          const theKarims = new Family('Karim');
          theKarims.addMember('Anwar', 59);
          theKarims.addMember('Nadira', 49)
          theKarims.addMember('Taq', 28)
          theKarims.addMember('Rumman', 21)

          theKarims.getChildren()
                // []

          theKarims.desc()
                // Anwar - 59; Nadia - 49; Taq - 28; Rumman - 21

          const theHaruns = new Family('Harun');
          theHaruns.addMember('Joey', 48);
          theHaruns.addMember('Viny', 35);
          theHaruns.addMember('Arabella', 6);

          theHaruns.getChildren(100)
                // [ Member {name: 'Arabella', age: 6} ]

          theHaruns.desc()
              // Joey - 48; Viny - 35; Arabella - 6
*/