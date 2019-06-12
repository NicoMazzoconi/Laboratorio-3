/// <reference path="./Vehiculo.js" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(marca, cantRuedas) {
            return _super.call(this, marca, cantRuedas) || this;
        }
        return Auto;
    }(Vehiculo));
    Clases.Auto = Auto;
})(Clases || (Clases = {}));
