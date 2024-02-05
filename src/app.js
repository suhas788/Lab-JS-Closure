const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 4;

const NEG_INF = -1000000;

function createPop(array, target) {
  const title = document.createElement('h3');
  let currIndex = NEG_INF;
  let check = false;

  function searchForElement(item) {
    const index = array.indexOf(item);
    if (index !== -1) {
      
      currIndex = index;
      check = true;
    }
  }

  return function () {
    
    searchForElement(target);

    
    return check ? 
      `The item is present and is at index ${currIndex}`
    : `The item is not present and is at index ${NEG_INF}`;
  };
}



const popClosure = createPop(arrayOfNumbers, itemToSearch);