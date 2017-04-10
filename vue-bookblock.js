;(function () {
  var vBookBlock = {};
  var BookBlock = typeof require === 'function'
    ? require('./bookblock')
    : window.BookBlock;

  if (!BookBlock) {
    throw new Error('[vue-bookblock] cannot locate BookBlock.js.')
  }

  // exposed global options
  vBookBlock.config = {};

  vBookBlock.install = function (Vue) {
    Vue.directive('bookblock', {
      inserted: function (el, binding) {
        el.bookblock = new BookBlock(el, binding.value || vBookBlock.config);
      }
    })
  };

  if (typeof exports === 'object') {
    module.exports = vBookBlock
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return vBookBlock
    })
  } else if (window.Vue) {
    window.vBookBlock = vBookBlock;
    Vue.use(vBookBlock)
  }

})();
