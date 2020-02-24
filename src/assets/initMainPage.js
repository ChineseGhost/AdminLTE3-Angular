"use strict";
var App = {
    initMainPage: function () {
        $('body').Layout();
        $('[data-toggle="push-menu"]').PushMenu();
        $('[data-widget="treeview"]').Treeview('init');
    }
}