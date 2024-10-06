const jsonFormatter = (differences)=> {
  return JSON.stringify(differences, '', 4);
};

export default jsonFormatter;