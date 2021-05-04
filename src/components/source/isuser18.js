const isUser18 = (dob) => {
  //Check age
  const userAge =
    new Date(Date.now() - new Date(dob).getTime()).getUTCFullYear() - 1970;
  if (userAge > 17) {
    return true;
  } else {
    return false;
  }
};

module.exports = isUser18;
