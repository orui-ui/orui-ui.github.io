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
     * @description 尺寸 small、 middle、 large
     */
    size?: String;
     /**
     * @description 清空按钮显示状态
     * @default false
     */
    clearable?: boolean;
    /**
     * @description 密码可示状态
     * @default true
     */
    showPassword?: boolean;
}

const InputApi: FC <InputProps> = memo(()=>{
    return (
        <></>
    )
})

export default InputApi