"use strict";
exports.__esModule = true;
//import {Md5} from 'ts-md5/dist/md5';
var ts_md5_1 = require("ts-md5");
var SALT = "@@@###";
var Encriptador = /** @class */ (function () {
    function Encriptador() {
    }
    Encriptador.prototype.encrypt = function (password) {
        return ts_md5_1.Md5.hashStr(SALT + password);
    };
    return Encriptador;
}());
exports.Encriptador = Encriptador;
var main = function () {
    var encrip = new Encriptador();
    console.log(encrip.encrypt('1234'));
};
main();
