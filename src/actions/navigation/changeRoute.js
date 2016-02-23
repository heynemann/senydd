module.exports = function(path) {
  let newPath = '#'.concat(path.replace('#', ''));
  return { type: 'CHANGE_ROUTE', path: newPath};
};
