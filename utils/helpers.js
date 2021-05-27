module.exports = {
  isNotNA: (value) => {
    return value !== 'N/A';
  },
  getDate: (value) => {
    return value.getFullYear();
  },
  getLocaleDate: (value) => {
    return value.toLocaleDateString();
  }
};