describe('<%= scaffold.module %>/directives/<%= scaffold.name %>.js', function () {



    /**
     * $httpBackend is used to flush http requests which may be linked thru
     * services in your controller to be performed synchronously.
     *
     * @see http://docs.angularjs.org/api/ngMock.$httpBackend
     * @see http://docs.angularjs.org/api/ngMockE2E.$httpBackend
     * @type {ng.$httpBackend}
     */
    var $httpBackend;

    var directive, $scope;

    beforeEach(angular.mock.module('ngMock','<%= headlessCamelCase(scaffold.module) %>'));

    beforeEach(inject(function (/**function*/ $compile, /**ng.$rootScope.Scope*/$rootScope, $injector) {
        $scope = $rootScope.$new();
        $httpBackend = $injector.get('$httpBackend');
        directive = angular.element('<div <%= hyphenCase(scaffold.name) %>></div>');
        directive = $compile(directive)($scope);
        $rootScope.$digest();
        $httpBackend.resetExpectations();
    }));

    it('should add custom class to element', function () {
        expect(directive.hasClass('<%= hyphenCase(scaffold.name) %>')).toBe(true);
        expect(directive.hasClass('<%= hyphenCase(scaffold.module) %>')).toBe(true);
    });

    afterEach(function () {
        $scope.$destroy();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
