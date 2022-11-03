import React, { FC, memo } from 'react';

// api 文档


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
     * @description 密码可示状态 。仅type="password"有效。
     * @default true
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

const InputApi: FC <InputProps> = memo(()=>{
    return (
        <></>
    )
})

export default InputApi