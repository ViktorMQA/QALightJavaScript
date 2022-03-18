// ########################################################################################
// Создать ф-цию flatify, которая будет принимать объект и возвращать плоский объект с теми же свойствами.
// Допускаем, что уровень вложенности <= 3
// ########################################################################################


// easier

const instructorDataEasier = {
  name: 'Elie',
  fullName: 'Elie Johnson',
  additionalData: {
    instructor: true,
    favoriteBasketballTeam: 'New York Knicks',
    numberOfSiblings: 3,
    'is Youngest': true,
  },
  address: {
    city: 'West Orange',
    state: 'NJ',
  },
};


// instructorData

const instructorData = {
  name: 'Elie',
  fullName: 'Elie Johnson',
  additionalData: {
    instructor: true,
    moreDetails: {
      favoriteBasketballTeam: 'New York Knicks',
      numberOfSiblings: 3,
      'is Youngest': true,
      city: 'West Orange',
      state: 'NJ',
    },
  },
};

 
function flatify(obj = instructorData) {
  const newObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      newObj[key] = obj[key];
    } else {
      for (let key2 in obj[key]) {
        if (typeof obj[key][key2] !== "object") {
          newObj[key2] = obj[key][key2];
        } else {
          for (let key3 in obj[key][key2]) {
            newObj[key3] = obj[key][key2][key3];
          }
        }
      }
    }
  }
  return newObj;
}
//console.log(flatify());


// const flatInstructor = {
//   name: "Elie",
//   fullName: 'Elie Johnson',
//   instructor: true,
//   favoriteBasketballTeam: "New York Knicks",
//   numberOfSiblings: 3,
//   isYoungest: true,
//   city: "West Orange",
//   state: "NJ",
// }

// ########################################################################################
// создать fucntion countTypes (obj) - принимает объект и считает количество свойств каждого типа.
// результат вернуть в виде объекта, где ключи - тип, а свойства - количество свойств этого типа в исходном объекте.
// ########################################################################################

const instructorDataCountProps = {
  name: 'Elie',
  fullName: 'Elie Johnson',
  instructor: true,
  favoriteBasketballTeam: 'New York Knicks',
  numberOfSiblings: 3,
  'is Youngest': true,
  address: {
    // это просто свойство типа object; city и state не должн считаться
    city: 'West Orange',
    state: 'NJ',
  },
  hobbies: null,
};

function countTypes (obj){
  const object = {};
  let countNull = 0;
  let newKey = null;
  for(let key in obj){
    if(obj[key] !== null){
      newKey = typeof obj[key];
      object[newKey] = object[newKey] === undefined ? 1 : object[newKey] += 1
    } else {
      countNull++ 
      newKey = null;
      object[newKey] = countNull;           
    }    
  }
  return object;
}
//console.log(countTypes(instructorDataCountProps));



//{ string: 3, boolean: 2, number: 1, object: 1, null: 1 }

// ########################################################################################
// Функция buildInstructorObj принимает плоский объект и возврщает новый с теми же свойствами,но:
// Если в исходном встречаются свойства city и state - в новом - они должны объединиться в свойство address : {city: [value], state: [value]}
// Если встречаются свойста instructor, favoriteBasketballTeam, numberOfSiblings, 'is Youngest' - объеденить их в свойство additionalData: {...}
// ########################################################################################

const initialInstructor = {
  name: 'Elie',
  fullName: 'Elie Johnson',
  instructor: true,
  favoriteBasketballTeam: 'New York Knicks',
  numberOfSiblings: 3,
  isYoungest: true,
  city: 'West Orange',
  state: 'NJ',
};

function buildInstructorObj(obj) {
  const newObj = {};
  for (let key in obj) {
    if (key === "city" || key === "state") {
      if ("address" in newObj) {
        newObj.address[key] = obj[key];
      } else {
        newObj.address = { [key]: obj[key] }
      }
    } else if (key === "instructor" || key === "favoriteBasketballTeam" || key === "numberOfSiblings" || key === "isYoungest") {
      if ("additionalData" in newObj) {
        newObj.additionalData[key] = obj[key];
      } else {
        newObj.additionalData = { [key]: obj[key] }
      }
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
//console.log(buildInstructorObj(initialInstructor));




// const resultInstructor = {
//   name: 'Elie',
//   fullName: 'Elie Johnson',
//   additionalData: {
//     instructor: true,
//     favoriteBasketballTeam: 'New York Knicks',
//     numberOfSiblings: 3,
//     'is Youngest': true,
//   },
//   address: {
//     city: 'West Orange',
//     state: 'NJ',
//   },
// };

// ########################################################################################
//  Функция removeNulls - принимает объект и возвращает новый такой же, но без null свойств
// ########################################################################################

const instructorWithNulls = {
  name: 'Elie',
  fullName: 'Elie Johnson',
  instructor: true,
  favoriteBasketballTeam: 'New York Knicks',
  numberOfSiblings: null,
  isYoungest: null,
  city: 'West Orange',
  state: null,
};

function removeNulls(obj) {
  const withoutNulls = {};
  for (let key in obj) {
    if (obj[key] !== null) {
      withoutNulls[key] = obj[key]
    }
  }
  return withoutNulls;
}
//console.log(removeNulls(instructorWithNulls));



// const instructorWithoutNulls = {
//   name: 'Elie',
//   fullName: 'Elie Johnson',
//   instructor: true,
//   favoriteBasketballTeam: 'New York Knicks',
//   city: 'West Orange',
// };
