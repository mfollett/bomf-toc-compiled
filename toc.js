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
    }).
    service('headerFinder', function() {
      return function(element) {
        if(!element || !element.find) {
          return;
        }
        return element.find('h1');
      };
    }).
    directive('bomfTableOfContents', function(articleFinder) {
      return {
        restrict: 'E',
        compile: function(scope, element, attrs) {
        }
      };
    });
})();
