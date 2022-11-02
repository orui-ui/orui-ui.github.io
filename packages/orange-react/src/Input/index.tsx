
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
     * @description 尺寸 small、 middle、 large
     */
    size?: String;
     /**
     * @description 清空按钮显示状态
     * @default false
     */
    clearable?: boolean;
    /**
     * 清空内容回调函数
     */
     cleanContent: Function | undefined;
     /**
     * @description 密码可示状态
     * @default false
     */
    showPassword?: boolean;
}


type inputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Component = forwardRef<HTMLInputElement, inputProps & InputProps>((props, outerRef) => {

    const p = {...props};
    
    let {
        size = 'small', 
        type, 
        clearable = false, 
        onFocus, 
        onBlur, 
        cleanContent, 
        showPassword = true, 
        disabled
    } = p;
    
    if(!type) type = 'text';
    // 删除部分属性
    delete p['size'];
    delete p['clearable']
    delete p['onFocus']
    delete p['onBlur']
    delete p['cleanContent']
    delete p['showPassword']

    // 当前焦点状态
    const [currentFocus, setCurrentValue] = useState(false);
    // 密码显示状态
    const [showPasswords, setShowPasswordsValue] = useState(true);


    let element = <div className={
        `o-input o-input-border ${['small', 'middle', 'large'].includes(size as string) ? 
            'o-input-' + size : ''} ${currentFocus ? 'o-input-border-focus' : ''} ${disabled ? 'o-input-border-disabled' : ''}`}
        >
            <input ref={outerRef} {...p} 
              type={ type.includes('password') && !showPasswords ? 'text' : type}
              onFocus={(event)=>{
                setCurrentValue(true)
                if(typeof onFocus === 'function') onFocus(event)
            }}
            onBlur={(event)=>{
                setCurrentValue(false)
                if(typeof onBlur === 'function') onBlur(event)
            }}
            />
            {/* 清空按钮 */}
            {clearable && <Icon name="close" size={1} color="#8a8a8a" onClick={
                () => {
                    if(typeof cleanContent === 'function') cleanContent()
                }
            } />}
            {/* 显示密码按钮 */}
            {type.includes('password') && showPassword && <Icon name={showPasswords ? 'eye-close' : 'eye'} size={1} color="#8a8a8a" onClick={
                () => {
                    setShowPasswordsValue(!showPasswords);
                }
            } />}
        </div>

    return (
        <>
            {!['checkbox', 'file', 'radio'].includes(type) && element}
        </>
    )
})


Component.displayName = 'Input'

export default withModel(Component );