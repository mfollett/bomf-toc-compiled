describe('headerFinder', function() {
  var headerFinder;

  beforeEach(function() {
    module('bomf.table-of-contents-compiled');
    inject(function(_headerFinder_) {
      headerFinder = _headerFinder_;
    });
  });

  describe('when passed bad data', function() {
    it('returns undefined on a non-element', function() {
      expect(headerFinder({})).toEqual(undefined);
    });
    it('returns undefined from undefined', function() {
      expect(headerFinder(undefined)).toEqual(undefined);
    });
  });

  describe('when there is a header available', function() {
    var header, element;
    beforeEach(function() {
      element = angular.element('<article><h1>foo</h1></article>');
      header  = angular.element(element.children()[0]);
    });

    it('finds the header', function() {
      expect(headerFinder(element)).toEqual(header);
    });
  });

  describe('when there are no headers available', function() {
    beforeEach(function() {
      element = angular.element('<article></article>');
    });

    it('finds no items', function() {
      expect(headerFinder(element).length).toEqual(0);
    });
  });
});
