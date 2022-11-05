import React, { memo } from 'react';
import Icon from '../Icon'; // Button

import './index.module.less';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
//
var Button = /*#__PURE__*/ memo(function (props) {
  var type = props.type,
    size = props.size,
    disabled = props.disabled,
    radius = props.radius,
    loading = props.loading,
    _onClick = props.onClick,
    children = props.children,
    className = props.className,
    style = props.style; //
  // 类型列表

  var typeList = ['default', 'primary', 'success', 'warning', 'danger', 'text'];
  return /*#__PURE__*/ _jsx('div', {
    children: /*#__PURE__*/ _jsxs('button', {
      className:
        (size !== null && size !== void 0 && size.includes('middle')
          ? 'o-button-middle'
          : size !== null && size !== void 0 && size.includes('large')
          ? 'o-button-large'
          : 'o-button-small') +
        ' ' +
        'o-button' +
        ' ' +
        'o-button' +
        (typeList.includes(type) && !(type !== null && type !== void 0 && type.includes('default'))
          ? '-'.concat(type)
          : '') +
        ''.concat(radius ? ' o-button-radius' : '') +
        ''.concat(typeof className === 'string' ? ' ' + className : ''),
      style: style,
      disabled: disabled,
      onClick: function onClick(event) {
        if (loading) {
          return;
        }

        if (typeof _onClick === 'function') _onClick(event);
      },
      children: [
        loading &&
          /*#__PURE__*/ _jsx('div', {
            style: {
              margin: '5px 10px 5px 5px',
            },
            children: /*#__PURE__*/ _jsx(Icon, {
              name: 'loading',
              spin: true,
              size: 1.5,
            }),
          }),
        children,
      ],
    }),
  });
});
export default Button;
