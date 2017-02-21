'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by JieYi on 2017/2/20.
 * 二月
 */
var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
    }, {
        key: 'click',
        value: function click() {
            console.log(123);
        }
    }]);

    return Point;
}();

var Bar = function () {
    function Bar() {
        _classCallCheck(this, Bar);
    }

    _createClass(Bar, [{
        key: 'doStuff',
        value: function doStuff() {
            console.log('stuff');
        }
    }]);

    return Bar;
}();

var b = new Bar();
b.doStuff(); // "stuff"


/*我是注释*/
//我是注释2

var Paa = function Paa() {
    _classCallCheck(this, Paa);

    this.x = x;
    this.y = y;
};

var aaa = function (_Paa) {
    _inherits(aaa, _Paa);

    function aaa(x, y, color) {
        _classCallCheck(this, aaa);

        var _this = _possibleConstructorReturn(this, (aaa.__proto__ || Object.getPrototypeOf(aaa)).call(this, x, y));

        _this.color = color;
        return _this;
    }

    return aaa;
}(Paa);
//# sourceMappingURL=es6.js.map
//# sourceMappingURL=es6.js.map