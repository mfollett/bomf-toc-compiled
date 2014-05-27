describe('articleFinder', function() {
  var articleFinder;

  beforeEach(function() {
    module('bomf.table-of-contents-compiled');
    inject(function(_articleFinder_) {
      articleFinder = _articleFinder_;
    });
  });

  describe('when passed bad data', function() {
    it('returns undefined on a non-element', function() {
      expect(articleFinder({})).toEqual(undefined);
    });
    it('returns undefined from undefined', function() {
      expect(articleFinder(undefined)).toEqual(undefined);
    });
  });

  describe('when an article exists', function() {

    describe('and is the direct parent', function() {
      var element, article;

      beforeEach(function() {
        article = angular.element('<article><e></e></article>');
        element = angular.element(article.children()[0]);
      });

      it('returns the article', function() {
        expect(articleFinder(element)).toEqual(article);
      });
    });

    describe('and is a distant ancestor', function() {
      var element, article;

      beforeEach(function() {
        article = angular.element(
          '<article><parent><e></e></parent></article>'
        );
        var parent = angular.element(article.children()[0]);
        element = angular.element(parent.children()[0]);
      });

      it('returns the article', function() {
        expect(articleFinder(element)).toEqual(article);
      });
    });
  });

  describe('when an article does not exist', function() {
    beforeEach(function() {
      element = angular.element('<some-element></some-element>');
    });

    it('returns undefined', function() {
      expect(articleFinder(element)).toEqual(undefined);
    });
  });
});
