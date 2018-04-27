'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ownerDocument = require('dom-helpers/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ownerWindow = function ownerWindow(node) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  var doc = (0, _ownerDocument2.default)(node);
  return doc.defaultView || doc.parentView || fallback;
};

exports.default = ownerWindow;