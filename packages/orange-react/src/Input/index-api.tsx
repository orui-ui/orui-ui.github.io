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
    text?: String;
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
}

const InputApi: FC <InputProps> = memo(()=>{
    return (
        <></>
    )
})

export default InputApi