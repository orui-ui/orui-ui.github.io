import React, { useState } from 'react';
import { Input } from 'orui-ui';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function () {
  var v = useState('');
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      style: {
        display: 'flex',
      },
      children: [
        /*#__PURE__*/ _jsx(Input, {
          models: v,
          prefixIcon: 'user',
          placeholder: 'Please input',
          size: 'small',
        }),
        /*#__PURE__*/ _jsx(Input, {
          models: v,
          suffixIcon: 'search',
          placeholder: 'Please input',
          size: 'middle',
        }),
      ],
    }),
  });
});
