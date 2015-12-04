
let homeFactory = function ($resource) {
  
  let resources = {};

  return $resource('https://secret-oasis-5061.herokuapp.com/api/Usuario/:url/:id', {}, resources);
};


export default ['$resource', homeFactory];
