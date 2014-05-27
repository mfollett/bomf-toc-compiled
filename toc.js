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
    directive('bomfTableOfContents', function(articleFinder, headerFinder) {
      return {
        restrict: 'E',
        scope:    false,
        compile: function(element, attrs) {
          var list = angular.element('<ol class="toc-table"></ol>');
          angular.forEach(
            headerFinder(
              articleFinder(element)),
              function(header) {
                var content = angular.element(header).text();
                list.append('<li class="toc-entry">'+ content +'</li>');
              }
          );
          element.append(list);
        }
      };
    });
})();
