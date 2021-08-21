exports.sortMyArray = (array) => {
  array.sort((a, b) => {
    if (a - b < 0) {
      return -1;
    } else {
      return 1;
    }
  });
};
