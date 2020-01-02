module.exports = {
  get: () => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          title: 'Wash the dishes'
        },
        {
          id: 1,
          title: 'Make the bed'
        }
      ]
    });
  }
};