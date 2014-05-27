/*
 *
 **/


(function() {
  'use strict';

  angular.module('bomf.table-of-contents-compiled', []).
    service('articleFinder', function() {
      return function(element) {
        while(element && element.parent && element.parent().length > 0) {
          parent = element.parent();
          if(parent && parent.prop && parent.prop('nodeName') === 'ARTICLE') {
            return parent;
          }
          element = parent;
        }
      };
    });
})();

