"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Pagination.css");

var Pagination = function Pagination(_ref) {
  var postsPerPage = _ref.postsPerPage,
      totalPosts = _ref.totalPosts,
      paginate = _ref.paginate,
      currentPage = _ref.currentPage;
  var pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "pagination"
  }, pageNumbers.map(function (number) {
    return /*#__PURE__*/_react.default.createElement("li", {
      onClick: function onClick() {
        paginate(number);
      },
      key: number,
      className: "page-item ".concat(currentPage === number ? "active" : "")
    }, number);
  })));
};

var _default = Pagination;
exports.default = _default;