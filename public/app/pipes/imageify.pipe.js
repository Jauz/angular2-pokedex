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
var ImageifyPipe = (function () {
    function ImageifyPipe() {
    }
    ImageifyPipe.prototype.transform = function (value, args) {
        if (!value)
            return '';
        var pokemonName = value
            .replace('♀', 'f')
            .replace('♂', 'm')
            .replace(/\W+/g, "")
            .toLocaleLowerCase();
        var url = "public/assets/img/pokemons/" + pokemonName + ".jpg";
        return url;
    };
    ImageifyPipe = __decorate([
        core_1.Pipe({ name: 'imageify' }), 
        __metadata('design:paramtypes', [])
    ], ImageifyPipe);
    return ImageifyPipe;
}());
exports.ImageifyPipe = ImageifyPipe;
//# sourceMappingURL=imageify.pipe.js.map