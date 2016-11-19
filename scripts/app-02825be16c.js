!function(){"use strict";angular.module("githubRanked",["ngCookies","ngTouch","ngSanitize","ui.router","ui.bootstrap","toastr","ngResource","angular-loading-bar","LocalStorageModule"])}(),function(){"use strict";function t(){function t(){return o}var o=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"}];this.getTec=t}angular.module("githubRanked").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t,o,r,n){t.search=function(a){o.debug(n.CHANGE_EVENT+" "+a),r.set("github-ranked-org",a),t.$emit(n.CHANGE_EVENT,a),t.org=""}}t.$inject=["$scope","$log","localStorageService","ORGANIZATION"];var o={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return o}angular.module("githubRanked").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function o(o,r,n,a){var i,e=t(r[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});r.addClass("acme-malarkey"),angular.forEach(o.extraValues,function(t){e.type(t).pause()["delete"]()}),i=o.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){e.type(t.login).pause()["delete"]()})}),o.$on("$destroy",function(){i()})}function r(t,o){function r(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return o.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],r()}r.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:r,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("githubRanked").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,o){function r(r){function a(t){return t.data}function i(o){t.error("XHR Failed for getContributors.\n"+angular.toJson(o.data,!0))}return r||(r=30),o.get(n+"/contributors?per_page="+r).then(a)["catch"](i)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:n,getContributors:r};return a}t.$inject=["$log","$http"],angular.module("githubRanked").factory("githubContributor",t)}(),function(){"use strict";function t(t){this.repos=function(o){return t({method:"GET",url:"https://api.github.com/orgs/"+o+"/repos"})}}t.$inject=["$http"],angular.module("githubRanked").service("OrganizationService",t)}(),function(){"use strict";function t(t,o,r,n,a,i){t.debug("organization "+o.org);var e=this;e.org=n.get("github-ranked-org")||i.DEFAULT,t.debug(e.org),a.repos(e.org).then(function(t){e.repos=t.data,e.organization=e.repos[0].owner},function(){r.error("Can not find your organization.","Not found!")})}t.$inject=["$log","$stateParams","toastr","localStorageService","OrganizationService","ORGANIZATION"],angular.module("githubRanked").controller("OrganizationController",t)}(),function(){"use strict";function t(t,o,r,n){t.$on(n.CHANGE_EVENT,function(){r.go("organization",{},{reload:!0})})}t.$inject=["$scope","$log","$state","ORGANIZATION"],angular.module("githubRanked").controller("MainController",t)}(),function(){"use strict";function t(t){this.commits=function(o,r){return t({method:"GET",url:"https://api.github.com/repos/"+o+"/"+r+"/commits"})}}t.$inject=["$http"],angular.module("githubRanked").service("commitService",t)}(),function(){"use strict";function t(t,o,r){var n=this;n.org=t.org,n.repo=t.repo,r.commits(t.org,t.repo).then(function(t){n.commits=t.data},function(){o.error("Can not find your repo.","Not found!")})}t.$inject=["$stateParams","toastr","commitService"],angular.module("githubRanked").controller("CommitController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("githubRanked").run(t)}(),function(){"use strict";function t(t,o){t.state("organization",{url:"/",templateUrl:"app/organization/organization.html",controller:"OrganizationController",controllerAs:"main"}).state("commits",{url:"/:org/:repo/commits",templateUrl:"app/commit/commit.html",controller:"CommitController",controllerAs:"commit"}),o.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("githubRanked").config(t)}(),function(){"use strict";angular.module("githubRanked").constant("malarkey",malarkey).constant("moment",moment).constant("ORGANIZATION",{DEFAULT:"nasa",CHANGE_EVENT:"change-org"})}(),function(){"use strict";function t(t,o,r){t.debugEnabled(!0),r.allowHtml=!0,r.timeOut=3e3,r.positionClass="toast-top-right",r.preventDuplicates=!0,r.progressBar=!0,o.html5Mode({enabled:!0,requireBase:!1})}t.$inject=["$logProvider","$locationProvider","toastrConfig"],angular.module("githubRanked").config(t)}(),angular.module("githubRanked").run(["$templateCache",function(t){t.put("app/commit/commit.html",'<div class=col-md-4><div class=row><div class="col-sm-6 col-md-12"><div class=thumbnail><div class=caption><h3>{{ commit.repo }}</h3></div></div></div></div></div><div class=col-md-8><div class=row><div class="col-sm-6 col-md-12" ng-repeat="commit in commit.commits | orderBy:\'-commit.committer.date\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><p><a ng-if=commit.author.avatar_url ng-href="{{ commit.author.html_url }}" target=_blank title="{{ commit.commit.author.name }}"><img class=pull-right ng-src="{{ commit.author.avatar_url }}" alt="{{ commit.commit.author.name }}"></a><strong>{{ commit.commit.message }}</strong></p><span class=small>by {{ commit.commit.author.name }} {{ commit.commit.committer.date | date: \'medium\' }}</span></div></div></div></div></div>'),t.put("app/organization/organization.html",'<div class=col-md-4><div class=row><div class="col-sm-6 col-md-12"><div class=thumbnail><h1>{{ main.organization.login }}</h1><img width=100px ng-src="{{ main.organization.avatar_url }}" alt="{{ main.organization.login }}"></div></div></div></div><div class=col-md-8><div class=row><div class="col-sm-6 col-md-12" ng-repeat="repo in main.repos | orderBy:\'-forks_count\'"><div class=thumbnail><div class=caption><h3><a ui-sref="commits({org: main.org, repo: repo.name})">{{ repo.name }}</a></h3><p>{{ repo.description }}</p><p><span><span class="label label-success">{{ repo.language }}</span> <span class="label label-default">forks: {{ repo.forks_count }}</span></span></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-default navbar-static-top"><div class=container-fluid><!-- Brand and toggle get grouped for better mobile display --><div class=navbar-header><a class=navbar-brand href=/ ><img width=40px alt=Brand src=https://assets-cdn.github.com/images/modules/logos_page/Octocat.png></a></div><!-- Collect the nav links, forms, and other content for toggling --><div class="collapse navbar-collapse navbar-right" id=bs-example-navbar-collapse-1><form class="navbar-form navbar-left"><div class=form-group><input type=text class=form-control ng-model=org placeholder="Search for organization"></div><button type=submit ng-click=search(org) class="btn btn-default">Search</button></form></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-02825be16c.js.map
