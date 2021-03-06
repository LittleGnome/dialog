System.register(['aurelia-pal'], function (exports) {
  'use strict';
  var DOM;
  return {
    setters: [function (module) {
      DOM = module.DOM;
    }],
    execute: function () {

      var AttachFocus = exports('AttachFocus', (function () {
          function AttachFocus(element) {
              this.element = element;
              this.value = true;
          }
          AttachFocus.inject = function () {
              return [DOM.Element];
          };
          AttachFocus.prototype.attached = function () {
              if (this.value === '' || (this.value && this.value !== 'false')) {
                  this.element.focus();
              }
          };
          AttachFocus.$resource = {
              type: 'attribute',
              name: 'attach-focus'
          };
          return AttachFocus;
      }()));

    }
  };
});
//# sourceMappingURL=attach-focus.js.map
