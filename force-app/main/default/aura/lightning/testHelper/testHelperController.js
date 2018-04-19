({
    myAction : function(component, event, helper) {

    },
    getHelper: function(component, event, helper) {
        if ( $T ) {
         return helper;
        } else {
         throw new Error('API is only supported in test context');
        }
       }
})
