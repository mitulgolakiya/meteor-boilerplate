/**
 * Created by Mitul on 12/01/15.
 */

Meteor.startup(function () {
    AccountsEntry.config({
        dashboardRoute: 'home',
        homeRoute: 'home',
        showOtherLoginServices: true,
        extraSignUpFields: []
    });
});

if(Meteor.isClient) {

}