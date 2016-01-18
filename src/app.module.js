angular.module("app",["controllers","directives"])
  .config(function($logProvider){
    $logProvider.debugEnabled(true);
});