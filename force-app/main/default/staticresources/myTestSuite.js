describe("Lightning Component Testing Examples", function() {
    afterEach(function () {
        $T.clearRenderedTestComponents();
    });

    describe("A Suite that tests the obvious", function() {
        it("spec that verifies that true is true", function() {
            expect(true).toBe(true);
        });
    });

    describe("c:helloWorld", function(){
        it('verify component rendering', function (done) {
            $T.createComponent('c:helloWorld', {}, true)
                .then(function(cmp) {
                    expect(cmp.find('message').getElement().innerHTML).toBe('Hello World!');
                    done();
                }).catch(function (e) {
                    done.fail('failed to create component ' + JSON.stringify(e));
                });
        });
    });

    describe('c:componentWithDataBinding', function () {
        it('verify data binding', function (done) {
            console.log($T);
           $T.createComponent('c:componentWithDataBinding', {message: 'Hello World!'}, true)
              .then(function (component) {
                
                 expect(component.find("message").getElement().innerHTML).toBe('Hello World!');
                 expect(component.find("messageInput").get("v.value")).toBe('Hello World!');
                 done();
           }).catch(function (e) {
                
                 done.fail(e);
           });
        });
     });
     
     describe("c:componentWithMethod", function() {
        it('verify method invocation', function(done) {
            $T.createComponent("c:componentWithMethod", {}, false)
                .then(function (component) {
                    expect(component.get("v.counter")).toBe(0);
                    component.increment();
                    expect(component.get("v.counter")).toBe(1);
                    done();
                }).catch(function (e) {
                    done.fail(e);
                });
        })
     });
});