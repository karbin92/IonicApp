(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{IA7C:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),b=u("oBZk"),o=u("ZZ/e"),r=u("iInd"),a=u("SVse"),s=u("s7LF"),c=u("5zEn");class g{constructor(l){this.seriesService=l,this.searchTerm="",this.type=c.a.all}ngOnInit(){}searchChanged(){this.results=this.seriesService.searchData(this.searchTerm,this.type)}}var h=e.pb({encapsulation:0,styles:[[""]],data:{}});function d(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit.Poster)}))}function C(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ion-icon",[["name","videocam"],["slot","end"]],null,null,null,b.H,b.m)),e.qb(1,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"videocam")}),null)}function p(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ion-icon",[["name","tv"],["slot","end"]],null,null,null,b.H,b.m)),e.qb(1,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"tv")}),null)}function m(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"ion-icon",[["name","logo-game-controller-b"],["slot","end"]],null,null,null,b.H,b.m)),e.qb(1,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"logo-game-controller-b")}),null)}function v(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,20,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,2).onClick()&&t),"click"===n&&(t=!1!==e.Cb(l,4).onClick(u)&&t),t}),b.I,b.n)),e.qb(1,49152,null,0,o.G,[e.h,e.k,e.x],{button:[0,"button"]},null),e.qb(2,16384,null,0,r.n,[r.m,r.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Db(3,3),e.qb(4,737280,null,0,o.Jb,[a.h,o.Gb,e.k,r.m,[2,r.n]],null,null),(l()(),e.rb(5,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,b.w,b.b)),e.qb(6,49152,null,0,o.e,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,d)),e.qb(8,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(9,0,null,0,5,"ion-label",[["text-wrap",""]],null,null,null,b.J,b.o)),e.qb(10,49152,null,0,o.M,[e.h,e.k,e.x],null,null),e.qb(11,16384,null,0,o.c,[e.k],null,null),(l()(),e.rb(12,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Ib(13,null,["",""])),(l()(),e.Ib(14,0,[" "," "])),(l()(),e.gb(16777216,null,0,1,null,C)),e.qb(16,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,p)),e.qb(18,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,m)),e.qb(20,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/","series",n.context.$implicit.imdbID);l(n,2,0,u),l(n,4,0),l(n,8,0,"N/A"!=n.context.$implicit.Poster),l(n,16,0,"movie"==n.context.$implicit.Type),l(n,18,0,"series"==n.context.$implicit.Type),l(n,20,0,"game"==n.context.$implicit.Type)}),(function(l,n){l(n,13,0,n.context.$implicit.Title),l(n,14,0,n.context.$implicit.Year)}))}function f(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,6,"ion-header",[],null,null,null,b.G,b.l)),e.qb(1,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,b.P,b.u)),e.qb(3,49152,null,0,o.Bb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(4,0,null,0,2,"ion-title",[],null,null,null,b.O,b.t)),e.qb(5,49152,null,0,o.zb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["My Series Search"])),(l()(),e.rb(7,0,null,null,37,"ion-content",[],null,null,null,b.F,b.k)),e.qb(8,49152,null,0,o.t,[e.h,e.k,e.x],null,null),(l()(),e.rb(9,0,null,0,6,"ion-searchbar",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Cb(l,10)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Cb(l,10)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.searchTerm=u)&&t),"ionChange"===n&&(t=!1!==i.searchChanged()&&t),t}),b.L,b.q)),e.qb(10,16384,null,0,o.Lb,[e.k],null,null),e.Fb(1024,null,s.b,(function(l){return[l]}),[o.Lb]),e.qb(12,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.c,null,[s.e]),e.qb(14,16384,null,0,s.d,[[4,s.c]],null,null),e.qb(15,49152,null,0,o.jb,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,23,"ion-item",[],null,null,null,b.I,b.n)),e.qb(17,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.rb(18,0,null,0,2,"ion-label",[],null,null,null,b.J,b.o)),e.qb(19,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,["Pick a category"])),(l()(),e.rb(21,0,null,0,18,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Cb(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Cb(l,22)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.type=u)&&t),"ionChange"===n&&(t=!1!==i.searchChanged()&&t),t}),b.N,b.r)),e.qb(22,16384,null,0,o.Kb,[e.k],null,null),e.Fb(1024,null,s.b,(function(l){return[l]}),[o.Kb]),e.qb(24,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.c,null,[s.e]),e.qb(26,16384,null,0,s.d,[[4,s.c]],null,null),e.qb(27,49152,null,0,o.mb,[e.h,e.k,e.x],null,null),(l()(),e.rb(28,0,null,0,2,"ion-select-option",[["value",""]],null,null,null,b.M,b.s)),e.qb(29,49152,null,0,o.nb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(-1,0,["All"])),(l()(),e.rb(31,0,null,0,2,"ion-select-option",[["value","movie"]],null,null,null,b.M,b.s)),e.qb(32,49152,null,0,o.nb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(-1,0,["Movie"])),(l()(),e.rb(34,0,null,0,2,"ion-select-option",[["value","series"]],null,null,null,b.M,b.s)),e.qb(35,49152,null,0,o.nb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(-1,0,["Series"])),(l()(),e.rb(37,0,null,0,2,"ion-select-option",[["value","episode"]],null,null,null,b.M,b.s)),e.qb(38,49152,null,0,o.nb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Ib(-1,0,["Episode"])),(l()(),e.rb(40,0,null,0,4,"ion-list",[],null,null,null,b.K,b.p)),e.qb(41,49152,null,0,o.N,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,2,null,v)),e.qb(43,278528,null,0,a.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Eb(131072,a.b,[e.h])],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,u.searchTerm),l(n,24,0,u.type),l(n,29,0,""),l(n,32,0,"movie"),l(n,35,0,"series"),l(n,38,0,"episode"),l(n,43,0,e.Jb(n,43,0,e.Cb(n,44).transform(u.results)))}),(function(l,n){l(n,9,0,e.Cb(n,14).ngClassUntouched,e.Cb(n,14).ngClassTouched,e.Cb(n,14).ngClassPristine,e.Cb(n,14).ngClassDirty,e.Cb(n,14).ngClassValid,e.Cb(n,14).ngClassInvalid,e.Cb(n,14).ngClassPending),l(n,21,0,e.Cb(n,26).ngClassUntouched,e.Cb(n,26).ngClassTouched,e.Cb(n,26).ngClassPristine,e.Cb(n,26).ngClassDirty,e.Cb(n,26).ngClassValid,e.Cb(n,26).ngClassInvalid,e.Cb(n,26).ngClassPending)}))}function k(l){return e.Kb(0,[(l()(),e.rb(0,0,null,null,1,"app-series",[],null,null,null,f,h)),e.qb(1,114688,null,0,g,[c.b],null,null)],(function(l,n){l(n,1,0)}),null)}var q=e.nb("app-series",g,k,{},{},[]);class x{}u.d(n,"SeriesPageModuleNgFactory",(function(){return I}));var I=e.ob(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[i.a,q]],[3,e.j],e.v]),e.Ab(4608,a.l,a.k,[e.s,[2,a.s]]),e.Ab(4608,s.g,s.g,[]),e.Ab(4608,o.a,o.a,[e.x,e.g]),e.Ab(4608,o.Fb,o.Fb,[o.a,e.j,e.p]),e.Ab(4608,o.Ib,o.Ib,[o.a,e.j,e.p]),e.Ab(1073742336,a.c,a.c,[]),e.Ab(1073742336,s.f,s.f,[]),e.Ab(1073742336,s.a,s.a,[]),e.Ab(1073742336,o.Db,o.Db,[]),e.Ab(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),e.Ab(1073742336,x,x,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,r.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);