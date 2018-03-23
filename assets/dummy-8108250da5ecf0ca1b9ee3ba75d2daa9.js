"use strict";define("dummy/-privates/routes/base",["exports","ember"],function(e,t){function n(){if(!o){var e=document.head,t=this.getProperties("title","description","keywords"),n=t.title,l=t.description,s=t.keywords;document.title=n,e.querySelector('meta[name="keywords"]').setAttribute("content",s.join()),e.querySelector('meta[name="description"]').setAttribute("content",l)}}var l=t.default.on,o=t.default.testing;e.default=t.default.Route.extend({title:"Ember Tracker: Easily add tracking to your Ember JS application.",description:"ember-tracker is a simple Ember JS addon which implements Google Analytics, Tealium, and other tracking software for your Ember application.",keywords:["ember-tracker","ember","addon","javascript","es6","google-analytics","tealium","tracking","tracker"],_onRouteActivated:l("activate",n)})}),define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l,o){var s=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,s=t.default.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default}),(0,l.default)(s,o.default.modulePrefix),e.default=s}),define("dummy/controllers/google-analytics",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({googleAnalytics:t.default.inject.service(),actions:{sendEvent:function(){this.get("googleAnalytics").event("Testing Category","click","Test Label",1)},sendTiming:function(){this.get("googleAnalytics").timing("Testing Timing","Timing Button",1,"Timing Label")},sendSocial:function(){this.get("googleAnalytics").social("Google+","share","https://plus.google.com")}}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var o,s=n.default.exportApplicationGlobal;o="string"==typeof s?s:t.default.String.classify(n.default.modulePrefix),l[o]||(l[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[o]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment","ember-tracker/mixins/google-analytics-route","ember-tracker/mixins/tealium-route"],function(e,t,n,l,o){var s=t.default.Router.extend(l.default,o.default,{location:n.default.locationType,rootURL:n.default.rootURL});s.map(function(){this.route("google-analytics",function(){this.route("test-nested-route"),this.route("test-with-slug",{path:"test-with-id/:some_slug"}),this.route("test-with-id",{path:"test-with-id/:some_id"})}),this.route("tealium")}),e.default=s}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return t.default.Object.create({githubLink:"https://github.com/tsteuwer/ember-tracker",travisBadge:"https://travis-ci.org/tsteuwer/ember-tracker.svg?branch=master",travisLink:"https://travis-ci.org/tsteuwer/ember-tracker",npmBadge:"https://badge.fury.io/js/ember-tracker.svg",npmLink:"http://badge.fury.io/js/ember-tracker"})}})}),define("dummy/routes/google-analytics",["exports","dummy/-privates/routes/base"],function(e,t){e.default=t.default.extend({title:"Google Analytics: Track your Ember JS application in Google Analytics.",description:"Add Google Analytics page tracking and events with Ember Tracker",keywords:["google","analytics","ember","ga","tracking","addon"]})}),define("dummy/routes/google-analytics/test-nested-route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({title:"This is a nested route test page.",keywords:["google","analytics","test","page"],description:"This is a test page for nested routes"})}),define("dummy/routes/google-analytics/test-with-id",["exports","ember"],function(e,t){e.default=t.default.Route.extend({title:"Testing With Id",model:function(){return{}}})}),define("dummy/routes/google-analytics/test-with-slug",["exports","ember"],function(e,t){e.default=t.default.Route.extend({title:"Testing With Slug"})}),define("dummy/routes/index",["exports","dummy/-privates/routes/base"],function(e,t){e.default=t.default.extend({title:"Ember Tracker: A simpler way to track your Ember JS application."})}),define("dummy/routes/tealium",["exports","ember"],function(e,t){e.default=t.default.Route.extend({title:"Tealium IQ: Add the popular tag manager to your Ember JS application",description:"Add Tealium IQ tag manager to your Ember JS application with Ember Tracker",keywords:["tealium","iq","ember","utag","tag","tracking","addon"]})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/google-analytics",["exports","ember-tracker/services/google-analytics"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"u4Dty8oI",block:'{"statements":[["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","pull-right badges"],["flush-element"],["text","\\n    "],["open-element","a",[]],["static-attr","class","top-badge"],["dynamic-attr","href",["unknown",["model","npmLink"]],null],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","src",["unknown",["model","npmBadge"]],null],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","class","top-badge"],["dynamic-attr","href",["unknown",["model","travisLink"]],null],["flush-element"],["text","\\n      "],["open-element","img",[]],["dynamic-attr","src",["unknown",["model","travisBadge"]],null],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","class","top-badge github-logo"],["dynamic-attr","href",["unknown",["model","githubLink"]],null],["flush-element"],["text","\\n      "],["open-element","img",[]],["static-attr","width","32px"],["static-attr","height","32px"],["static-attr","src","/images/GitHub-Mark-32px.png"],["flush-element"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\t"],["open-element","h1",[]],["flush-element"],["block",["link-to"],["index"],null,0],["close-element"],["text","\\n\\t"],["append",["unknown",["outlet"]],false],["text","\\n"],["close-element"],["text","\\n"],["open-element","footer",[]],["flush-element"],["text","\\n\\tCreated with ♥ by "],["open-element","a",[]],["static-attr","href","https://github.com/tsteuwer"],["flush-element"],["text","Troy Steuwer"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Ember Tracker"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/google-analytics",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Za0PuEkw",block:'{"statements":[["open-element","h3",[]],["flush-element"],["text","Google Analytics"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","API"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","With the Google Analytics service, you have access to four methods."],["close-element"],["text","\\n"],["open-element","ol",[]],["flush-element"],["text","\\n\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","event(category:String, action:String, label:String, value:Number: fields:Object)"],["close-element"],["text",": "],["open-element","a",[]],["static-attr","href","https://developers.google.com/analytics/devguides/collection/analyticsjs/events"],["flush-element"],["text","Documentation"],["close-element"],["close-element"],["text","\\n\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","pageview(page:String, title:String)"],["close-element"],["text",": "],["open-element","a",[]],["static-attr","href","https://developers.google.com/analytics/devguides/collection/analyticsjs/pages"],["flush-element"],["text","Documentation"],["close-element"],["close-element"],["text","\\n\\t"],["open-element","ul",[]],["flush-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","Note: "],["open-element","code",[]],["flush-element"],["text","page"],["close-element"],["text"," is used to "],["open-element","code",[]],["flush-element"],["text","ga(\'set\', \'page\', page)"],["close-element"],["text"," so that all other methods get sent under the correct route."],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","social(network:String, action:String, target:String, fields:Object)"],["close-element"],["text",": "],["open-element","a",[]],["static-attr","href","https://developers.google.com/analytics/devguides/collection/analyticsjs/social-interactions"],["flush-element"],["text","Documentation"],["close-element"],["close-element"],["text","\\n\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","timing(category:String, timingVar:String, timingVar:Number, timingLabel:String, fields:Object)"],["close-element"],["text",": "],["open-element","a",[]],["static-attr","href","https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings"],["flush-element"],["text","Documentation"],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Configuring Google Analytics"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","After you\'ve installed the addon, open your config file located in "],["open-element","code",[]],["flush-element"],["text","config/environment.js"],["close-element"],["text",". Next, add a new object to the "],["open-element","code",[]],["flush-element"],["text","ENV"],["close-element"],["text"," variable called "],["open-element","code",[]],["flush-element"],["text","emberTracker"],["close-element"],["text",". Finally, add an object on it called "],["open-element","code",[]],["flush-element"],["text","analyticsSettings"],["close-element"],["text"," with your "],["open-element","code",[]],["flush-element"],["text","trackingId"],["close-element"],["text",". Your config should look something similar to:\\n"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","[...]\\nmodule.exports = function(environment) {\\n\\tvar ENV = {\\n\\t\\t[...]\\n\\t\\tAPP: {\\n\\t\\t\\t// Here you can pass flags/options to your application instance\\n\\t\\t\\t// when it is created\\n\\t\\t},\\n\\t\\temberTracker: {\\n\\t\\t\\tanalyticsSettings: {\\n\\t\\t\\t\\ttrackingId: \'UA-########-#\',\\n\\t\\t\\t},\\n\\t\\t},\\n\\t};\\n[...]"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","Feel free to change your trackingId based on the environment you\'re in."],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","Now, you can add the GoogleAnalyticsRoute mixin to your Router to start tracking pageviews and inject the service into your controllers/components."],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","strong",[]],["flush-element"],["text","Options"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tThere are three options available for Google Analytics you may want to use in your "],["open-element","code",[]],["flush-element"],["text","environment.js"],["close-element"],["text"," file. They are:\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","ul",[]],["flush-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","LOG_PAGEVIEW"],["close-element"],["text"," (boolean) - Logs all "],["open-element","code",[]],["flush-element"],["text","pageview"],["close-element"],["text"," events to the console."],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","LOG_EVENTS"],["close-element"],["text"," (boolean) - Logs all "],["open-element","code",[]],["flush-element"],["text","event"],["close-element"],["text",", "],["open-element","code",[]],["flush-element"],["text","timing"],["close-element"],["text"," and "],["open-element","code",[]],["flush-element"],["text","network"],["close-element"],["text"," (social) requests to the console."],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","onload"],["close-element"],["text"," (boolean) - Lazy loads GoogleAnalytics after the "],["open-element","code",[]],["flush-element"],["text","window.onload"],["close-element"],["text"," event fires. It uses "],["open-element","code",[]],["flush-element"],["text","addEventListener"],["close-element"],["text"," which requires >= IE9."],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","\\n\\t\\t\\t"],["open-element","code",[]],["flush-element"],["text","createOptions"],["close-element"],["text"," (object) - Adds create options to your "],["open-element","code",[]],["flush-element"],["text","ga(\'create\', \'UA-####\', { ..options..})"],["close-element"],["text"," call. This object will be encoded through "],["open-element","code",[]],["flush-element"],["text","JSON.stringify"],["close-element"],["text",".\\n\\t\\t"],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tThese options allow you to ensure your events are being fired.\\n"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Tracking Routes"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","First, open up your "],["open-element","code",[]],["flush-element"],["text","router.js"],["close-element"],["text"," file and add the "],["open-element","code",[]],["flush-element"],["text","GoogleAnalyticsRoute"],["close-element"],["text"," mixin like below:"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","import Ember from \'ember\';\\nimport config from \'./config/environment\';\\nimport GoogleAnalyticsRoute from \'ember-tracker/mixins/google-analytics-route\';\\n\\nconst Router = Ember.Router.extend(GoogleAnalyticsRoute, {\\n\\tlocation: config.locationType,\\n\\trootURL: config.rootURL\\n});\\n\\nRouter.map(function() {\\n\\t// your routes\\n});\\n\\nexport default Router;\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tNext, open up your "],["open-element","code",[]],["flush-element"],["text","/config/environment.js"],["close-element"],["text"," file. This is where you\'ll set your Analytics account information.\\n"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","module.exports = function(environment) {\\n\\t// ...\\n\\n\\tENV.emberTracker = {\\n\\t\\ttrackingId: \'UA-########-#\',\\n\\t};\\n\\n\\t// ..."],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","strong",[]],["flush-element"],["text","That\'s it!"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","div",[]],["static-attr","class","alert alert-warning"],["flush-element"],["text","\\n\\t\\t"],["open-element","strong",[]],["flush-element"],["text","NOTE"],["close-element"],["text","\\n\\t\\t"],["open-element","p",[]],["flush-element"],["text","\\n\\t\\t\\tI encourage you to setup \\"dev\\" and \\"staging\\" tracking IDs in your Google Analytics account so that you do not touch production data. Use the "],["open-element","code",[]],["flush-element"],["text","environment"],["close-element"],["text"," variable in your config file to set these up.\\n\\t\\t"],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tBy default, the addon will:\\n\\t"],["open-element","ul",[]],["flush-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","grab the current "],["open-element","code",[]],["flush-element"],["text","Route"],["close-element"],["text"," look for a "],["open-element","code",[]],["flush-element"],["text","title"],["close-element"],["text"," property. If that doesn\'t exsist, it will use the "],["open-element","code",[]],["flush-element"],["text","document.title"],["close-element"],["text","."],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","use "],["open-element","code",[]],["flush-element"],["text","location.pathname"],["close-element"],["text"," as the URL."],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tTo override any of the above, you can provide a method on your Route called "],["open-element","code",[]],["flush-element"],["text","beforeGoogleAnalytics"],["close-element"],["text"," that will return an object with either a "],["open-element","code",[]],["flush-element"],["text","title"],["close-element"],["text",", "],["open-element","code",[]],["flush-element"],["text","page"],["close-element"],["text",", or both, and it will use those instead.\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\nLets say you want all page views for "],["open-element","code",[]],["flush-element"],["text","/member/123"],["close-element"],["text"," (or "],["open-element","code",[]],["flush-element"],["text","/member/*"],["close-element"],["text"," for that matter), to be sent as "],["open-element","code",[]],["flush-element"],["text","/member"],["close-element"],["text"," since the "],["open-element","code",[]],["flush-element"],["text",":memberId"],["close-element"],["text"," might be private. All you have to do is:\\n"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","import Ember from \'ember\';\\n\\nexport default Ember.Route.extend({\\n\\tbeforeGoogleAnalytics() {\\n\\t\\treturn {\\n\\t\\t\\ttitle: \'Member Profile\',\\n\\t\\t\\tpage: \'/member\',\\n\\t\\t};\\n\\t},\\n\\t// ...\\n});\\n"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Tracking Events"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["open-element","strong",[]],["flush-element"],["text","Example"],["close-element"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tEvents are very simple. The first thing you must do is the inject the service. From then on, you can call any of the following methods: "],["open-element","code",[]],["flush-element"],["text","event"],["close-element"],["text",", "],["open-element","code",[]],["flush-element"],["text","timing"],["close-element"],["text",", or "],["open-element","code",[]],["flush-element"],["text","social"],["close-element"],["text",". \\n"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","import Ember from \'ember\';\\n\\nexport default Ember.Component.extend({\\n\\tgoogleAnalytics: Ember.inject.service(),\\n\\t// ...\\n\\tactions: {\\n\\t\\ttoggleFormState() {\\n\\t\\t\\tthis.toggleProperty(\'showing\');\\n\\t\\t\\tthis.get(\'googleAnalytics\').event(\'My Category\', \'click\', \'Toggle Form\');\\n\\t\\t},\\n\\t\\ttrackTweet() {\\n\\t\\t\\t//...\\n\\t\\t\\tthis.get(\'googleAnalytics\').social(\'Twitter\', \'tweet\', \'http://ctt.ec/HCfaQ\');\\n\\t\\t},\\n\\t\\ttrackTiming() {\\n\\t\\t\\tvar start = Date.now();\\n\\t\\t\\tthis.get(\'ajax\')\\n\\t\\t\\t\\t.then(this.get(\'onResolve\'), this.get(\'onReject\'))\\n\\t\\t\\t\\t.finally(() => {\\n\\t\\t\\t\\t\\tthis.get(\'googleAnalytics).timing(\'Ajax Speed\', Date.now() - start, \'My Component Speed\');\\n\\t\\t\\t\\t});\\n\\t\\t},\\n\\t\\t//...\\n\\t},\\n});\\n"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","For Development & Testing"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","button",[]],["static-attr","class","btn"],["modifier",["action"],[["get",[null]],"sendEvent"]],["flush-element"],["text","\\n\\t\\tTest Event\\n\\t"],["close-element"],["text","\\n\\t"],["open-element","button",[]],["static-attr","class","btn"],["modifier",["action"],[["get",[null]],"sendTiming"]],["flush-element"],["text","\\n\\t\\tTest Timing\\n\\t"],["close-element"],["text","\\n\\t"],["open-element","button",[]],["static-attr","class","btn"],["modifier",["action"],[["get",[null]],"sendSocial"]],["flush-element"],["text","\\n\\t\\tTest Social\\n\\t"],["close-element"],["text","\\n\\t"],["open-element","p",[]],["flush-element"],["text","\\n\\t\\t"],["block",["link-to"],["google-analytics.test-nested-route"],null,2],["text"," | \\n\\t\\t"],["block",["link-to"],["google-analytics.test-with-slug","some kind of slug"],null,1],["text"," | \\n\\t\\t"],["block",["link-to"],["google-analytics.test-with-id",123],null,0],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Test ID Route"]],"locals":[]},{"statements":[["text","Test Slug Route"]],"locals":[]},{"statements":[["text","Test Nested Route"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/google-analytics.hbs"}})}),define("dummy/templates/google-analytics/test-nested-route",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"rivwruW5",block:'{"statements":[["text","This is a test for nested routes.\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/google-analytics/test-nested-route.hbs"}})}),define("dummy/templates/google-analytics/test-with-id",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"NOecrFuj",block:'{"statements":[["text","This is a test for id routes.\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/google-analytics/test-with-id.hbs"}})}),define("dummy/templates/google-analytics/test-with-slug",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"s7/S6Uj8",block:'{"statements":[["text","This is a test for slug routes.\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/google-analytics/test-with-slug.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"8E+yzKhT",block:'{"statements":[["open-element","p",[]],["flush-element"],["text","\\n"],["open-element","code",[]],["flush-element"],["text","ember-tracker"],["close-element"],["text"," is a simple "],["open-element","a",[]],["static-attr","href","https://emberjs.com"],["flush-element"],["text","Ember"],["close-element"],["text"," addon which easily implements popular tracking software such as "],["block",["link-to"],["google-analytics"],null,3],["text"," and "],["block",["link-to"],["tealium"],null,2],["text",".\\n"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Installation"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","Install the addon simply by using the following command."],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","ember install ember-tracker"],["close-element"],["text","\\n"],["append",["unknown",["outlet"]],false],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Now what?"],["close-element"],["text","\\n"],["open-element","ul",[]],["flush-element"],["text","\\n\\t"],["open-element","li",[]],["flush-element"],["text","Learn how to setup and start tracking pageview\'s or sending events with "],["block",["link-to"],["google-analytics"],null,1],["text","."],["close-element"],["text","\\n\\t"],["open-element","li",[]],["flush-element"],["text","Or, learn how to setup "],["block",["link-to"],["tealium"],null,0],["text","."],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","Tealium IQ"]],"locals":[]},{"statements":[["text","Google Analytics"]],"locals":[]},{"statements":[["text","Tealium IQ"]],"locals":[]},{"statements":[["text","Google Analytics"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/tealium",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mEISWrRb",
block:'{"statements":[["open-element","h3",[]],["flush-element"],["text","Tealium IQ"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","API"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","With the "],["open-element","code",[]],["flush-element"],["text","TealiumRoute"],["close-element"],["text"," mixin, you can add "],["open-element","a",[]],["static-attr","href","https://tealiumiq.com"],["flush-element"],["text","Tealium IQ"],["close-element"],["text"," effortlessly to your routes."],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Configuring Tealium IQ"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\nTo allow Tealium, simply open the "],["open-element","code",[]],["flush-element"],["text","config/environment.js"],["close-element"],["text"," file and add a new object to the "],["open-element","code",[]],["flush-element"],["text","ENV"],["close-element"],["text"," variable called "],["open-element","code",[]],["flush-element"],["text","emberTracker"],["close-element"],["text",". Finally, add an object called "],["open-element","code",[]],["flush-element"],["text","tealiumSettings"],["close-element"],["text"," with a your "],["open-element","code",[]],["flush-element"],["text","accountName"],["close-element"],["text"," as an additional property. Your config should look something similar to:\\n"],["close-element"],["text","\\n\\n"],["open-element","pre",[]],["flush-element"],["text","[...]\\nmodule.exports = function(environment) {\\n\\tvar ENV = {\\n\\t\\t[...]\\n\\t\\tAPP: {\\n\\t\\t\\t// Here you can pass flags/options to your application instance\\n\\t\\t\\t// when it is created\\n\\t\\t},\\n\\t\\temberTracker: {\\n\\t\\t\\ttealiumSettings: {\\n\\t\\t\\t\\taccountName: \'myAccName\',\\n\\t\\t\\t},\\n\\t\\t},\\n\\t};\\n[...]"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","strong",[]],["flush-element"],["text","Options"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tThere is one option available for Tealium you may wish to use in your "],["open-element","code",[]],["flush-element"],["text","environment.js"],["close-element"],["text"," file. It is:\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\t"],["open-element","ul",[]],["flush-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["open-element","code",[]],["flush-element"],["text","onload"],["close-element"],["text"," (boolean) - Lazy loads Tealium after the "],["open-element","code",[]],["flush-element"],["text","window.onload"],["close-element"],["text"," event fires. It uses "],["open-element","code",[]],["flush-element"],["text","addEventListener"],["close-element"],["text"," which requires >= IE9."],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","hr",[]],["flush-element"],["close-element"],["text","\\n"],["open-element","h4",[]],["flush-element"],["text","Tracking Routes"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","First, open up your "],["open-element","code",[]],["flush-element"],["text","router.js"],["close-element"],["text"," file and add the "],["open-element","code",[]],["flush-element"],["text","TealiumRoute"],["close-element"],["text"," mixin like below:"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","import Ember from \'ember\';\\nimport config from \'./config/environment\';\\nimport TealiumRoute from \'ember-tracker/mixins/tealium-route\';\\n\\nconst Router = Ember.Router.extend(TealiumRoute, {\\n\\tlocation: config.locationType,\\n\\trootURL: config.rootURL\\n});\\n\\nRouter.map(function() {\\n\\t// your routes\\n});\\n\\nexport default Router;\\n"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tNext, open up your "],["open-element","code",[]],["flush-element"],["text","/config/environment.js"],["close-element"],["text"," file. This is where you\'ll set your Tealium account name information.\\n"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","module.exports = function(environment) {\\n\\t// ...\\n\\n\\tENV.analyticsSettings = {\\n\\t\\taccountName: \'mybiz\',\\n\\t};\\n\\n\\t// ..."],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","\\n\\tFinally, you need to add a method on your routes called "],["open-element","code",[]],["flush-element"],["text","getTealiumView"],["close-element"],["text",". This will be all the data you need to send that you would normally put in the "],["open-element","code",[]],["flush-element"],["text","utag_data"],["close-element"],["text"," object. For example:\\n"],["close-element"],["text","\\n"],["open-element","pre",[]],["flush-element"],["text","import Ember from \'ember\';\\n\\nexport default Ember.Route.extend({\\n\\t// ...\\n\\tgetTealiumView() {\\n\\t\\treturn {\\n\\t\\t\\tcustomerId: this.get(\'memberService.id\'),\\n\\t\\t\\torder_currency: this.get(\'order.currency\'),\\n\\t\\t\\tpage_type: \'checkout\',\\n\\t\\t};\\n\\t},\\n\\t// ...\\n});"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","alert alert-warning"],["flush-element"],["text","\\n\\tBy default, we add the following properties to the object:\\n\\t"],["open-element","ul",[]],["flush-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","\\n\\t\\t\\t"],["open-element","code",[]],["flush-element"],["text","customerId"],["close-element"],["text",": "],["open-element","code",[]],["flush-element"],["text","null"],["close-element"],["text","\\n\\t\\t"],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","\\n\\t\\t\\t"],["open-element","code",[]],["flush-element"],["text","domain"],["close-element"],["text",": we retrieve this from "],["open-element","code",[]],["flush-element"],["text","location.hostname"],["close-element"],["text","\\n\\t\\t"],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","\\n\\t\\t\\t"],["open-element","code",[]],["flush-element"],["text","order_currency"],["close-element"],["text",": USD\\n\\t\\t"],["close-element"],["text","\\n\\t\\t"],["open-element","li",[]],["flush-element"],["text","\\n\\t\\t\\t"],["open-element","code",[]],["flush-element"],["text","page_type"],["close-element"],["text",": home\\n\\t\\t"],["close-element"],["text","\\n\\t"],["close-element"],["text","\\n\\tAnything you pass back from "],["open-element","code",[]],["flush-element"],["text","getTealiumView"],["close-element"],["text"," will overwrite these properties.\\n"],["close-element"],["text","\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/tealium.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),l={default:n};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({});