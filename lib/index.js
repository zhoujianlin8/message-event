"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by zhou on 17/3/6.
 */
var Message = function () {
    function Message() {
        _classCallCheck(this, Message);

        this._listeners = {};
    }

    _createClass(Message, [{
        key: "on",
        //{'a':[fn, fn,fn],'b':[fn,fn]}
        value: function on(name, fn) {
            var listenerItem = this._listeners[name] || [];
            fn = fn || function () {};
            listenerItem.push(fn);
            this._listeners[name] = listenerItem;
            return this;
        }
    }, {
        key: "off",
        value: function off(name, fn) {
            if (fn === undefined) {
                delete this._listeners[name];
                return this;
            }
            var listenerItem = this._listeners[name] || [];
            var newArr = [];
            listenerItem.forEach(function (item) {
                if (item !== fn) {
                    newArr.push(item);
                }
            });
            this._listeners[name] = newArr;
            return this;
        }
    }, {
        key: "fire",
        value: function fire(name) {
            for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                props[_key - 1] = arguments[_key];
            }

            var listenerItem = this._listeners[name];
            if (listenerItem) {
                listenerItem.forEach(function (item) {
                    item && item.apply(undefined, props);
                });
            }
            return this;
        }
    }]);

    return Message;
}();

exports.default = Message;