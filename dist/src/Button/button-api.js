import React, { useContext } from 'react';
import { context, useApiData } from 'dumi/theme';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
var LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)',
  },
};
export default (function (_ref) {
  var identifier = _ref.identifier,
    expt = _ref.export;
  var data = useApiData(identifier);

  var _useContext = useContext(context),
    locale = _useContext.locale;

  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS['zh-CN'] : LOCALE_TEXTS['en-US'];
  return /*#__PURE__*/ _jsx(_Fragment, {
    children:
      data &&
      /*#__PURE__*/ _jsxs('table', {
        children: [
          /*#__PURE__*/ _jsx('thead', {
            children: /*#__PURE__*/ _jsxs('tr', {
              children: [
                /*#__PURE__*/ _jsx('th', {
                  children: texts.name,
                }),
                /*#__PURE__*/ _jsx('th', {
                  children: texts.description,
                }),
                /*#__PURE__*/ _jsx('th', {
                  children: texts.type,
                }),
                /*#__PURE__*/ _jsx('th', {
                  children: texts.default,
                }),
              ],
            }),
          }),
          /*#__PURE__*/ _jsx('tbody', {
            children: data[expt].map(function (row) {
              return /*#__PURE__*/ _jsxs(
                'tr',
                {
                  children: [
                    /*#__PURE__*/ _jsx('td', {
                      children: row.identifier,
                    }),
                    /*#__PURE__*/ _jsx('td', {
                      children: row.description || '--',
                    }),
                    /*#__PURE__*/ _jsx('td', {
                      children: /*#__PURE__*/ _jsx('code', {
                        children: row.type,
                      }),
                    }),
                    /*#__PURE__*/ _jsx('td', {
                      children: /*#__PURE__*/ _jsx('code', {
                        children: row.default || (row.required && texts.required) || '--',
                      }),
                    }),
                  ],
                },
                row.identifier,
              );
            }),
          }),
        ],
      }),
  });
});
