webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_players_manage_players_component__ = __webpack_require__("../../../../../src/app/manage-players/manage-players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_status_manage_status_component__ = __webpack_require__("../../../../../src/app/manage-status/manage-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_players_player_list_player_list_component__ = __webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_players_player_add_player_add_component__ = __webpack_require__("../../../../../src/app/manage-players/player-add/player-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_status_game1_game1_component__ = __webpack_require__("../../../../../src/app/manage-status/game1/game1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_status_game2_game2_component__ = __webpack_require__("../../../../../src/app/manage-status/game2/game2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_status_game3_game3_component__ = __webpack_require__("../../../../../src/app/manage-status/game3/game3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/roster/list' },
    { path: 'roster', component: __WEBPACK_IMPORTED_MODULE_2__manage_players_manage_players_component__["a" /* ManagePlayersComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_4__manage_players_player_list_player_list_component__["a" /* PlayerListComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_5__manage_players_player_add_player_add_component__["a" /* PlayerAddComponent */] }
        ] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_3__manage_status_manage_status_component__["a" /* ManageStatusComponent */], children: [
            { path: 'game1', component: __WEBPACK_IMPORTED_MODULE_6__manage_status_game1_game1_component__["a" /* Game1Component */] },
            { path: 'game2', component: __WEBPACK_IMPORTED_MODULE_7__manage_status_game2_game2_component__["a" /* Game2Component */] },
            { path: 'game3', component: __WEBPACK_IMPORTED_MODULE_8__manage_status_game3_game3_component__["a" /* Game3Component */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<p id = \"headers\"> <a [routerLink] = \"['roster','list']\"> Manage Players </a>\n<a [routerLink] = \"['status','game1']\">Manage Player Status </a></p>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_players_manage_players_component__ = __webpack_require__("../../../../../src/app/manage-players/manage-players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_status_manage_status_component__ = __webpack_require__("../../../../../src/app/manage-status/manage-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_players_player_list_player_list_component__ = __webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_players_player_add_player_add_component__ = __webpack_require__("../../../../../src/app/manage-players/player-add/player-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_status_game1_game1_component__ = __webpack_require__("../../../../../src/app/manage-status/game1/game1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_status_game2_game2_component__ = __webpack_require__("../../../../../src/app/manage-status/game2/game2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_status_game3_game3_component__ = __webpack_require__("../../../../../src/app/manage-status/game3/game3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












 // <-- Import FormsModule
 // <-- Import HttpModule
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__manage_players_manage_players_component__["a" /* ManagePlayersComponent */],
            __WEBPACK_IMPORTED_MODULE_5__manage_status_manage_status_component__["a" /* ManageStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_6__manage_players_player_list_player_list_component__["a" /* PlayerListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__manage_players_player_add_player_add_component__["a" /* PlayerAddComponent */],
            __WEBPACK_IMPORTED_MODULE_8__manage_status_game1_game1_component__["a" /* Game1Component */],
            __WEBPACK_IMPORTED_MODULE_9__manage_status_game2_game2_component__["a" /* Game2Component */],
            __WEBPACK_IMPORTED_MODULE_10__manage_status_game3_game3_component__["a" /* Game3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__player_service_service__["a" /* PlayerServiceService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#box{\n    width:900px;\n    height: 650px;\n    border-style: solid;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"box\">\n<p id = \"subheaders\"> <a [routerLink] = \"['/roster','list']\"> List </a>\n<a [routerLink] = \"['/roster','add']\"> Add Player </a></p>\n<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePlayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagePlayersComponent = (function () {
    function ManagePlayersComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.getPlayers();
    }
    ManagePlayersComponent.prototype.ngOnInit = function () {
    };
    ManagePlayersComponent.prototype.getPlayers = function () {
        var _this = this;
        console.log("Getting the players");
        this._service.getPlayers()
            .then(function (players) { return _this.players = players; })
            .catch(function (err) { return console.log("Issue with getting players"); });
    };
    ManagePlayersComponent.prototype.statusChange = function (player) {
        this.getPlayers();
    };
    return ManagePlayersComponent;
}());
ManagePlayersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manage-players',
        template: __webpack_require__("../../../../../src/app/manage-players/manage-players.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-players/manage-players.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ManagePlayersComponent);

var _a, _b;
//# sourceMappingURL=manage-players.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-players/player-add/player-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color:red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/player-add/player-add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  player-add works!\n</p>\n<form #formData = 'ngForm' (submit) = \"addPlayer()\">\n  <p> Name: <input\n  name = \"name\"\n  type = \"text\"\n  minlength=\"2\"\n  required\n  [(ngModel)] = 'player.name'\n  #name = 'ngModel'> </p>\n  <p *ngIf = 'name.errors' class = 'red'> *The name has errors*</p>\n\n  Position: <input\n  name = \"position\"\n  type = 'text'\n  minlength = \"2\"\n  required\n  [(ngModel)] = 'player.position'\n  #position = 'ngModel'>\n  <p *ngIf = 'position.errors' class = 'red'> *The position field has errors*</p>\n\n  <p><input type = \"submit\" value = \"Create Player\" [disabled] = \"!formData.valid\"></p>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/manage-players/player-add/player-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__("../../../../../src/app/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerAddComponent = (function () {
    function PlayerAddComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
    }
    PlayerAddComponent.prototype.addPlayer = function () {
        var _this = this;
        console.log("Adding player, client side");
        this._service.addPlayer(this.player)
            .then(function (player) { return _this.player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */](); })
            .catch(function (err) { return console.log("Issue with adding a player"); });
        this._router.navigateByUrl('/roster/list');
    };
    PlayerAddComponent.prototype.ngOnInit = function () {
    };
    return PlayerAddComponent;
}());
PlayerAddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player-add',
        template: __webpack_require__("../../../../../src/app/manage-players/player-add/player-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-players/player-add/player-add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PlayerAddComponent);

var _a, _b;
//# sourceMappingURL=player-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-players/player-list/player-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    background-color:coral;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <th>Team Name</th>\n    <th>Position</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor = \"let player of players\">\n    <td>{{player.name}}</td>\n    <td>{{player.position}}</td>\n    <td><button class = \"red\" (click) = 'delete(player._id)'>Delete</button></td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manage-players/player-list/player-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerListComponent = (function () {
    function PlayerListComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.getPlayers();
    }
    PlayerListComponent.prototype.ngOnInit = function () {
    };
    PlayerListComponent.prototype.getPlayers = function () {
        var _this = this;
        console.log("Getting the players");
        this._service.getPlayers()
            .then(function (players) { return _this.players = players; })
            .catch(function (err) { return console.log("Issue with getting players"); });
        this._router.navigateByUrl('/roster/list');
    };
    PlayerListComponent.prototype.delete = function (id) {
        console.log(id);
        this._service.deletePlayer(id)
            .then(function (player) {
            return console.log(player);
        })
            .catch(function (err) { return console.log("There were issues deleting"); });
        this.getPlayers();
        this._router.navigateByUrl('/roster/list');
    };
    return PlayerListComponent;
}());
PlayerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-player-list',
        template: __webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PlayerListComponent);

var _a, _b;
//# sourceMappingURL=player-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-status/game1/game1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    background-color:red;\n    \n}\n\n.green{\n    background-color:green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/game1/game1.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <h2> Game 1 Roster </h2>\n  <tr>\n    <th> Player Name </th>\n    <th> Actions </th>\n  </tr>\n  <tr *ngFor = \"let player of players\">\n    <td>\n      {{player.name}}\n    </td>\n    <td> \n      <button *ngIf = \"player.game1 == true\" class = \"green\" (click) = 'change(player._id)'>Playing</button>\n      <button *ngIf = \"player.game1 == false\" (click) = 'change(player._id)'>Playing</button>\n      <button *ngIf = \"player.game1 == false\" class = \"red\" (click) = 'change(player._id)'>Not Playing </button>\n      <button *ngIf = \"player.game1 == true\" (click) = 'change(player._id)'> Not Playing </button>\n    </td>\n  </tr>\n</table>\n\n"

/***/ }),

/***/ "../../../../../src/app/manage-status/game1/game1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Game1Component = (function () {
    function Game1Component(_service) {
        this._service = _service;
        this.getPlayers();
    }
    Game1Component.prototype.ngOnInit = function () {
    };
    Game1Component.prototype.getPlayers = function () {
        var _this = this;
        console.log("Getting the players");
        this._service.getPlayers()
            .then(function (players) { return _this.players = players; })
            .catch(function (err) { return console.log("Issue with getting players"); });
    };
    Game1Component.prototype.change = function (id) {
        var _this = this;
        this.getPlayers();
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i]._id == id) {
                var player = this.players[i];
                if (player.game1 == true) {
                    player.game1 = false;
                }
                else {
                    player.game1 = true;
                }
            }
        }
        this._service.updatePlayer(player)
            .then(function (player) { return _this.getPlayers(); })
            .catch(function (err) { return console.log("Error with updating player"); });
    };
    return Game1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Game1Component.prototype, "players", void 0);
Game1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game1',
        template: __webpack_require__("../../../../../src/app/manage-status/game1/game1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-status/game1/game1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */]) === "function" && _a || Object])
], Game1Component);

var _a;
//# sourceMappingURL=game1.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-status/game2/game2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    background-color:red;\n}\n\n.green{\n    background-color:green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/game2/game2.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <h2> Game 2 Roster </h2>\n  <tr>\n    <th> Player Name </th>\n    <th> Actions </th>\n  </tr>\n  <tr *ngFor = \"let player of players\">\n    <td>\n      {{player.name}}\n    </td>\n    <td> \n      <button *ngIf = \"player.game2 == true\" class = \"green\" (click) = 'change(player._id)'>Playing</button>\n      <button *ngIf = \"player.game2 == false\" (click) = 'change(player._id)'>Playing</button>\n      <button *ngIf = \"player.game2 == false\" class = \"red\" (click) = 'change(player._id)'>Not Playing </button>\n      <button *ngIf = \"player.game2 == true\" (click) = 'change(player._id)'> Not Playing </button>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/manage-status/game2/game2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Game2Component = (function () {
    function Game2Component(_service) {
        this._service = _service;
        this.getPlayers();
    }
    Game2Component.prototype.ngOnInit = function () {
    };
    Game2Component.prototype.getPlayers = function () {
        var _this = this;
        console.log("Getting the players");
        this._service.getPlayers()
            .then(function (players) { return _this.players = players; })
            .catch(function (err) { return console.log("Issue with getting players"); });
    };
    Game2Component.prototype.change = function (id) {
        var _this = this;
        this.getPlayers();
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i]._id == id) {
                var player = this.players[i];
                if (player.game2 == true) {
                    player.game2 = false;
                }
                else {
                    player.game2 = true;
                }
            }
        }
        this._service.updatePlayer(player)
            .then(function (player) { return _this.getPlayers(); })
            .catch(function (err) { return console.log("Error with updating player"); });
    };
    return Game2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Game2Component.prototype, "players", void 0);
Game2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game2',
        template: __webpack_require__("../../../../../src/app/manage-status/game2/game2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-status/game2/game2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */]) === "function" && _a || Object])
], Game2Component);

var _a;
//# sourceMappingURL=game2.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-status/game3/game3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    background-color:red;\n    \n}\n\n.green{\n    background-color:green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/game3/game3.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <h2> Game 3 Roster </h2>\n  <tr>\n    <th> Player Name </th>\n    <th> Actions </th>\n  </tr>\n  <tr *ngFor = \"let player of players\">\n    <td>\n      {{player.name}}\n    </td>\n    <td> \n      <button *ngIf = \"player.game3 == true\" class = \"green\" (click) = 'change(player._id)'>Playing</button>\n      <button *ngIf = \"player.game3 == false\" (click) = 'change(player._id)'>Playing</button>\n      <button *ngIf = \"player.game3 == false\" class = \"red\" (click) = 'change(player._id)'>Not Playing </button>\n      <button *ngIf = \"player.game3 == true\" (click) = 'change(player._id)'> Not Playing </button>\n    </td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manage-status/game3/game3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service_service__ = __webpack_require__("../../../../../src/app/player-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Game3Component = (function () {
    function Game3Component(_service) {
        this._service = _service;
        this.getPlayers();
    }
    Game3Component.prototype.ngOnInit = function () {
    };
    Game3Component.prototype.getPlayers = function () {
        var _this = this;
        console.log("Getting the players");
        this._service.getPlayers()
            .then(function (players) { return _this.players = players; })
            .catch(function (err) { return console.log("Issue with getting players"); });
    };
    Game3Component.prototype.change = function (id) {
        var _this = this;
        this.getPlayers();
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i]._id == id) {
                var player = this.players[i];
                if (player.game3 == true) {
                    player.game3 = false;
                }
                else {
                    player.game3 = true;
                }
            }
        }
        this._service.updatePlayer(player)
            .then(function (player) { return _this.getPlayers(); })
            .catch(function (err) { return console.log("Error with updating player"); });
    };
    return Game3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], Game3Component.prototype, "players", void 0);
Game3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-game3',
        template: __webpack_require__("../../../../../src/app/manage-status/game3/game3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-status/game3/game3.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service_service__["a" /* PlayerServiceService */]) === "function" && _a || Object])
], Game3Component);

var _a;
//# sourceMappingURL=game3.component.js.map

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#box{\n    width:900px;\n    height: 650px;\n    border-style: solid;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"box\">\n  <p id = \"subheaders\"> <a [routerLink] = \"['/status','game1']\"> Game 1 </a>\n  <a [routerLink] = \"['/status','game2']\"> Game 2 </a> <a [routerLink] = \"['/status','game3']\"> Game 3 </a></p>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageStatusComponent = (function () {
    function ManageStatusComponent() {
    }
    ManageStatusComponent.prototype.ngOnInit = function () {
    };
    return ManageStatusComponent;
}());
ManageStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manage-status',
        template: __webpack_require__("../../../../../src/app/manage-status/manage-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manage-status/manage-status.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManageStatusComponent);

//# sourceMappingURL=manage-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/player-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerServiceService = (function () {
    function PlayerServiceService(_http) {
        this._http = _http;
        this.getPlayers();
    }
    PlayerServiceService.prototype.getPlayers = function () {
        console.log("Got to service");
        return this._http.get("/players").map(function (data) { return data.json(); }).toPromise();
    };
    PlayerServiceService.prototype.addPlayer = function (player) {
        console.log("Got to service");
        return this._http.post("/players", player).map(function (data) { return data.json(); }).toPromise();
    };
    PlayerServiceService.prototype.deletePlayer = function (id) {
        console.log("Got to service");
        return this._http.delete("/players/" + id).map(function (data) { return data.json(); }).toPromise();
    };
    PlayerServiceService.prototype.updatePlayer = function (player) {
        console.log("Got the service, update");
        return this._http.put("/players/" + player._id, player).map(function (data) { return data.json(); }).toPromise();
    };
    return PlayerServiceService;
}());
PlayerServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PlayerServiceService);

var _a;
//# sourceMappingURL=player-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(name, position) {
        if (name === void 0) { name = ""; }
        if (position === void 0) { position = ""; }
        this.name = name;
        this.position = position;
    }
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map