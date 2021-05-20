const getUser = (userArr, userEmail) => {
  if (!userArr || !userEmail) {
    return {};
  }
  return userArr.filter((user) => user.email !== userEmail)[0];
};

export default getUser;
