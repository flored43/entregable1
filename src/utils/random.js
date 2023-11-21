const getRandomElement = (elements) => {
  //? la logica necesaria para 
  // 0 ---------> 0.9999999  * 10 ==> 0 -----> 9.99999
  //? Suponiendo un elements con 10 elementos
 const indexRandom = Math.floor(Math.random() * elements.length);
 return elements[indexRandom];
  
};

export { getRandomElement }