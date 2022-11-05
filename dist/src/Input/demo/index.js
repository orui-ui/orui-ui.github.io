import React, { useState } from 'react';
import { Input } from 'orui-ui';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function () {
  var v = useState('');
  var d = useState('');
  var w = useState('');
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      style: {
        display: 'flex',
      },
      children: [
        /*#__PURE__*/ _jsx(Input, {
          models: v,
          placeholder: 'Please input',
          size: 'small',
        }),
        /*#__PURE__*/ _jsx(Input, {
          models: d,
          placeholder: 'Please input',
          size: 'middle',
        }),
        /*#__PURE__*/ _jsx(Input, {
          models: w,
          placeholder: 'Please input',
          size: 'large',
        }),
      ],
    }),
  });
});
