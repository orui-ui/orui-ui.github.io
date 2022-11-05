import React, { useState } from 'react';
import { Input } from 'orui-ui';
import { jsx as _jsx } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
export default (function () {
  var data = useState('我是输入的内容');
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsx(Input, {
        models: data,
        placeholder: '\u8BF7\u8F93\u5165\u5185\u5BB9',
      }),
      /*#__PURE__*/ _jsx('p', {
        children: '\u6211\u662F\u8F93\u5165\u7684\u5185\u5BB9\uFF1A '.concat(data[0]),
      }),
    ],
  });
});
