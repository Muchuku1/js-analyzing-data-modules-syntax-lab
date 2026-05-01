// Step 5: require datejs (outside the function)
require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Step 5: Add today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};