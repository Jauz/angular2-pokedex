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
var PokemonTypeComponent = (function () {
    function PokemonTypeComponent() {
        this.pokemon = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PokemonTypeComponent.prototype, "pokemon", void 0);
    PokemonTypeComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-type',
            template: "\n\t<a [routerLink]=\"['/pokedex/pokemons/type', type ]\" *ngFor=\"let type of pokemon.type\">\n\t\t<span class=\"label type type-{{type | lowercase}}\" >\n        \t{{type}}\n        </span>\n\t</a>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], PokemonTypeComponent);
    return PokemonTypeComponent;
}());
exports.PokemonTypeComponent = PokemonTypeComponent;
//# sourceMappingURL=pokemon-type.component.js.map