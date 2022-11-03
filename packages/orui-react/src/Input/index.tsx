
import React, { forwardRef, useState } from "react";
import './index.module.less';

import withModel from '../utils/withModel'
import {Icon} from '../index'

interface InputProps {
    /**
     * @description 双向绑定
     */
    models: String | Boolean | Number;
    /**
     * @description 类型
     * @default text
     */
    type?: String;
    /**
     * @description 最大输入长度
     */
    maxlength?: String | Number;
     /**
     * @description 最小输入长度
     */
    minlength?: String;
    /**
     * @description 输入框占位提示文本
     */
    placeholder?: String;
     /**
     * @description 尺寸 small、 middle、 large 。仅非type="textarea"有效。
     */
    size?: String;
     /**
     * @description 清空按钮显示状态 。仅非type="textarea"有效。
     * @default false
     */
    clearable?: boolean;
    /**
     * 清空内容回调函数 。仅非type="textarea"有效。
     */
     cleanContent: Function | undefined;
     /**
     * @description 密码可示状态 。仅非type="textarea"有效。
     * @default false
     */
    showPassword?: boolean;
    /**
     * @description 自定义前缀图标 。仅非type="textarea"有效。
     */
     prefixIcon?: string;
     /**
     * @description 自定义前缀图标颜色 。仅非type="textarea"有效。
     */
      prefixIconColor?: string;
     /**
      * @description 前缀图标点击事件 。仅非type="textarea"有效。
      */
      prefixIconClick?: Function | undefined;
     /**
      * @description 自定义后缀图标 。仅非type="textarea"有效。
      */
     suffixIcon?: string;
     /**
     * @description 自定义后缀图标颜色 。仅非type="textarea"有效。
     */
      suffixIconColor?: string;
     /**
      * @description 后缀图标点击事件 。仅非type="textarea"有效。
      */
      suffixIconClick?: Function | undefined;
    /**
    * @description 点击事件 
    */
    onClick?: Function | undefined;
}


type inputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLInputElement
>

const Component = forwardRef<HTMLInputElement, inputProps & InputProps>((props, outerRef) => {

    const p: any = {rows: 4,...props};
    
    let {
        size = 'small', 
        type, 
        clearable = false, 
        onFocus, 
        onBlur, 
        cleanContent, 
        showPassword = true, 
        disabled,
        value,
        prefixIcon,
        prefixIconColor,
        prefixIconClick,
        suffixIcon,
        suffixIconColor,
        suffixIconClick
    } = p;
    
    // type 属性限制
    const typeList: Array<string> = ['text', 'email', 'password', 'number', 'textarea', 'url', 'tel', 'search'];
    if(!type || !typeList.includes(type)) type = 'text';

    // 删除部分属性
    const deleteAttribute = [
        'size', 'clearable', 'onFocus', 'onBlur', 'cleanContent', 'showPassword',
        'prefixIcon', 'prefixIconColor', 'prefixIconClick', 'suffixIcon', 'suffixIconColor',
        'suffixIconClick', 
    ];
    for(let item of deleteAttribute){
        delete p[item as keyof typeof p];
    }

    // 当前焦点状态
    const [currentFocus, setCurrentValue] = useState(false);
    // 密码显示状态
    const [showPasswords, setShowPasswordsValue] = useState(true);


    let element = <div className={
        `o-input o-input-border ${['small', 'middle', 'large'].includes(size as string) && !type.includes('textarea') ? 
            'o-input-' + size : ''} ${currentFocus ? 'o-input-border-focus' : ''} ${disabled ? 'o-input-border-disabled' : ''}`}
        >
            {/* 自定义前缀图标 */}
            {prefixIcon !== undefined && !type.includes('textarea') && <Icon name={prefixIcon} size={1.5} color={prefixIconColor} onClick={prefixIconClick} /> }
            {/*  */}
            
            {/* textarea 输入框 */}
            {type.includes('textarea') && <textarea ref={outerRef} {...p} 
              type={ type.includes('password') && !showPasswords ? 'text' : type}
              onFocus={(event)=>{
                setCurrentValue(true)
                if(typeof onFocus === 'function') onFocus(event)
              }}
              onBlur={(event)=>{
                setCurrentValue(false)
                if(typeof onBlur === 'function') onBlur(event)
              }} />}

            {/* 普通输入框 */}
            {!type.includes('textarea') && <input ref={outerRef} {...p} 
              type={ type.includes('password') && !showPasswords ? 'text' : type}
              onFocus={(event)=>{
                setCurrentValue(true)
                if(typeof onFocus === 'function') onFocus(event)
              }}
              onBlur={(event)=>{
                setCurrentValue(false)
                if(typeof onBlur === 'function') onBlur(event)
              }}
            />}

            {/* 清空按钮 */}
            {clearable && value && !type.includes('textarea') && <Icon name="close" size={1} onClick={
                () => {
                    if(typeof cleanContent === 'function') cleanContent()
                }
            } />}
            {/* 显示密码按钮 */}
            {type.includes('password') && showPassword && <Icon name={showPasswords ? 'eyeClose' : 'eye'} size={1} color="#8a8a8a" onClick={
                () => {
                    setShowPasswordsValue(!showPasswords);
                }
            } />}
             {/* 自定义后缀图标 */}
            {suffixIcon !== undefined && !type.includes('textarea') && <Icon name={suffixIcon} size={1.5} color={suffixIconColor} onClick={suffixIconClick} /> }
        </div>

    return (
        <>
            {!['checkbox', 'file', 'radio'].includes(type) && element}
        </>
    )
})


Component.displayName = 'Input'

export default withModel(Component );