function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import React, { forwardRef, useState } from 'react';
import './index.module.less';
import withModel from '../utils/withModel';
import { Icon } from '../index';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var Component = /*#__PURE__*/ forwardRef(function (props, outerRef) {
  var p = _objectSpread(
    {
      rows: 4,
    },
    props,
  );

  var _p$size = p.size,
    size = _p$size === void 0 ? 'small' : _p$size,
    type = p.type,
    _p$clearable = p.clearable,
    clearable = _p$clearable === void 0 ? false : _p$clearable,
    _onFocus = p.onFocus,
    _onBlur = p.onBlur,
    cleanContent = p.cleanContent,
    _p$showPassword = p.showPassword,
    showPassword = _p$showPassword === void 0 ? true : _p$showPassword,
    disabled = p.disabled,
    value = p.value,
    prefixIcon = p.prefixIcon,
    prefixIconColor = p.prefixIconColor,
    prefixIconClick = p.prefixIconClick,
    suffixIcon = p.suffixIcon,
    suffixIconColor = p.suffixIconColor,
    suffixIconClick = p.suffixIconClick; // type 属性限制

  var typeList = ['text', 'email', 'password', 'number', 'textarea', 'url', 'tel', 'search'];
  if (!type || !typeList.includes(type)) type = 'text'; // 删除部分属性

  var deleteAttribute = [
    'size',
    'clearable',
    'onFocus',
    'onBlur',
    'cleanContent',
    'showPassword',
    'prefixIcon',
    'prefixIconColor',
    'prefixIconClick',
    'suffixIcon',
    'suffixIconColor',
    'suffixIconClick',
  ];

  for (var _i = 0, _deleteAttribute = deleteAttribute; _i < _deleteAttribute.length; _i++) {
    var item = _deleteAttribute[_i];
    delete p[item];
  } // 当前焦点状态

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    currentFocus = _useState2[0],
    setCurrentValue = _useState2[1]; // 密码显示状态

  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    showPasswords = _useState4[0],
    setShowPasswordsValue = _useState4[1];

  var element = /*#__PURE__*/ _jsxs('div', {
    className: 'o-input o-input-border '
      .concat(
        ['small', 'middle', 'large'].includes(size) && !type.includes('textarea')
          ? 'o-input-' + size
          : '',
        ' ',
      )
      .concat(currentFocus ? 'o-input-border-focus' : '', ' ')
      .concat(disabled ? 'o-input-border-disabled' : ''),
    children: [
      prefixIcon !== undefined &&
        !type.includes('textarea') &&
        /*#__PURE__*/ _jsx(Icon, {
          name: prefixIcon,
          size: 1.5,
          color: prefixIconColor,
          onClick: prefixIconClick,
        }),
      type.includes('textarea') &&
        /*#__PURE__*/ _jsx(
          'textarea',
          _objectSpread(
            _objectSpread(
              {
                ref: outerRef,
              },
              p,
            ),
            {},
            {
              type: type.includes('password') && !showPasswords ? 'text' : type,
              onFocus: function onFocus(event) {
                setCurrentValue(true);
                if (typeof _onFocus === 'function') _onFocus(event);
              },
              onBlur: function onBlur(event) {
                setCurrentValue(false);
                if (typeof _onBlur === 'function') _onBlur(event);
              },
            },
          ),
        ),
      !type.includes('textarea') &&
        /*#__PURE__*/ _jsx(
          'input',
          _objectSpread(
            _objectSpread(
              {
                ref: outerRef,
              },
              p,
            ),
            {},
            {
              type: type.includes('password') && !showPasswords ? 'text' : type,
              onFocus: function onFocus(event) {
                setCurrentValue(true);
                if (typeof _onFocus === 'function') _onFocus(event);
              },
              onBlur: function onBlur(event) {
                setCurrentValue(false);
                if (typeof _onBlur === 'function') _onBlur(event);
              },
            },
          ),
        ),
      clearable &&
        value &&
        !type.includes('textarea') &&
        /*#__PURE__*/ _jsx(Icon, {
          name: 'close',
          size: 1,
          onClick: function onClick() {
            if (typeof cleanContent === 'function') cleanContent();
          },
        }),
      type.includes('password') &&
        showPassword &&
        /*#__PURE__*/ _jsx(Icon, {
          name: showPasswords ? 'eyeClose' : 'eye',
          size: 1,
          color: '#8a8a8a',
          onClick: function onClick() {
            setShowPasswordsValue(!showPasswords);
          },
        }),
      suffixIcon !== undefined &&
        !type.includes('textarea') &&
        /*#__PURE__*/ _jsx(Icon, {
          name: suffixIcon,
          size: 1.5,
          color: suffixIconColor,
          onClick: suffixIconClick,
        }),
    ],
  });

  return /*#__PURE__*/ _jsx(_Fragment, {
    children: !['checkbox', 'file', 'radio'].includes(type) && element,
  });
});
Component.displayName = 'Input';
export default withModel(Component);
