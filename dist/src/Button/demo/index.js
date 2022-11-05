import React from 'react';
import { Button } from 'orui-ui';
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
        /*#__PURE__*/ _jsx(Button, {
          type: 'default',
          children: ' default',
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Button, {
          type: 'primary',
          size: 'middle',
          children: ' primary',
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Button, {
          type: 'success',
          size: 'large',
          radius: true,
          onClick: function onClick() {
            return alert('this is a button');
          },
          children: ' success',
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Button, {
          type: 'warning',
          width: '200px',
          children: ' waring - custom size',
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Button, {
          type: 'danger',
          width: '200px',
          children: ' danger - custom size',
        }),
        /*#__PURE__*/ _jsx('div', {
          style: {
            width: '20px',
          },
        }),
        /*#__PURE__*/ _jsx(Button, {
          type: 'text',
          children: ' text',
        }),
      ],
    }),
  });
});
