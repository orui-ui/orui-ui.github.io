import React from 'react';
import { Icon } from 'orui-ui';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
export default (function () {
  return /*#__PURE__*/ _jsx(_Fragment, {
    children: /*#__PURE__*/ _jsxs('div', {
      style: {
        display: 'flex',
      },
      children: [
        /*#__PURE__*/ _jsx(Icon, {
          name: 'top',
          size: 2,
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Icon, {
          name: 'setting',
          size: '3em',
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Icon, {
          name: 'loading',
          spin: true,
          color: '#cc0000',
        }),
      ],
    }),
  });
});
