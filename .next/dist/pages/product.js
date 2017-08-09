'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var ProductPage = function ProductPage(_ref) {
  var product = _ref.product;

  return _react2.default.createElement('div', null, _react2.default.createElement('h3', null, product.name), _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: product.description } }), _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { href: '/products' }, 'Back to list')));
};

ProductPage.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var query = _ref2.query;
    var res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(query);
            _context.next = 3;
            return fetch('https://app.scrap24.com/api/v1/products/' + query.productId);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;

            console.log(json);
            return _context.abrupt('return', { product: json[0] });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = ProductPage;