"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var pokemon_service_1 = require('../services/pokemon.service');
var _ = require('_');
var PokedexComponent = (function () {
    function PokedexComponent(_pokemonService, _routeParams) {
        this._pokemonService = _pokemonService;
        this._routeParams = _routeParams;
        this.pokemons = [];
        this.partition = function (data, n) {
            return _.chain(data).groupBy(function (element, index) { return Math.floor(index / n); }).toArray().value();
        };
    }
    PokedexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeParams.params.map(function (params) { return params.type; }).subscribe(function (pokemonType) {
            if (pokemonType) {
                _this._pokemonService.getPokemonsByType(pokemonType)
                    .subscribe(function (pokemons) {
                    _this.pokemons = pokemons;
                    _this.groupped = _this.partition(pokemons, 4);
                });
            }
            else {
                _this._pokemonService.getPokemons()
                    .subscribe(function (pokemons) {
                    _this.pokemons = pokemons;
                    _this.groupped = _this.partition(pokemons, 4);
                });
            }
        });
    };
    PokedexComponent = __decorate([
        core_1.Component({
            selector: 'pokedex',
            providers: [pokemon_service_1.PokemonService],
            template: "\n\t\t<div>\n  \t\t\t<div class=\"page-header\">\n    \t\t\t<h1>Pok\u00E9dex <small class=\"pull-right\" [style.marginTop]=\"'20px'\">Showing <span class=\"badge\">{{pokemons.length}}</span> Pok\u00E9mons</small></h1>\n\t\t\t\t<h2 *ngIf=\"pokemonType\"><span class=\"label type-{{pokemonType | lowercase}}\">{{pokemonType}}</span></h2>\n  \t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let group of groupped\">\n\t\t\t\t<div class=\"col-lg-3\" *ngFor=\"let pokemon of group\">\n\t\t\t\t\t<div class=\"pokemon panel panel-primary\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n          \t\t\t\t\t<pokemon-name [pokemon]=\"pokemon\" ></pokemon-name>\n        \t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/pokemon', pokemon.name ]\">\n\t\t\t\t\t\t\t\t<pokemon-image [pokemon]=\"pokemon\" ></pokemon-image>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<pokemon-type [pokemon]=\"pokemon\"></pokemon-type>\n\t\t\t\t\t\t\t</div>\n        \t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.ActivatedRoute])
    ], PokedexComponent);
    return PokedexComponent;
}());
exports.PokedexComponent = PokedexComponent;
//# sourceMappingURL=pokedex.component.js.map