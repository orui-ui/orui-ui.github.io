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

import React, { memo } from 'react';
import './index.module.less'; // Icon

import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var Icon = /*#__PURE__*/ memo(function (props) {
  var className = props.className,
    style = props.style,
    name = props.name,
    size = props.size,
    spin = props.spin,
    color = props.color,
    _onClick = props.onClick; // 大小

  var iconSize = '2em';

  if (size !== undefined) {
    if (typeof size === 'number') {
      iconSize = ''.concat(size, 'em');
    } else {
      iconSize = size;
    }
  } // 颜色

  var iconColor = '';

  if (color !== undefined) {
    iconColor = color;
  }

  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      onClick: function onClick(event) {
        if (typeof _onClick === 'function') _onClick(event);
      },
      children: [
        !spin &&
          /*#__PURE__*/ _jsx('i', {
            className: 'o-icon' + ' o-icon-'.concat(name) + ' '.concat(className ? className : ''),
            style: _objectSpread(
              {
                fontSize: iconSize,
                color: iconColor,
              },
              style,
            ),
          }),
        spin &&
          /*#__PURE__*/ _jsx('div', {
            className:
              'o-icon' +
              ' ' +
              'o-icon-' +
              name +
              ' '.concat(className ? className : '') +
              ''.concat(spin ? ' o-icon-spin' : ''),
            style: _objectSpread(
              {
                fontSize: iconSize,
                color: iconColor,
              },
              style,
            ),
          }),
      ],
    }),
  });
});
export default Icon;
