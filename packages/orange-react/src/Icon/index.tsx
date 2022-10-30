import React, { FC, memo } from "react";
import './index.module.less';

// Icon

interface IconProps {
    /**
     * @description 类名
     */
    className?: String;
    /**
     * @description 样式
     */
    style?: Object;
    /**
     * @description 图标名称
     */
    name: String;
    /**
     * @description 图标大小
     * @default 2em
     */
    size: String | Number;
    /**
     * @description 旋转
     * @default false
     */
    spin:Boolean;
    /**
     * @description 点击事件
     */
    onClick: Function | undefined;
}

const Icon : FC<IconProps> = memo ( props => {

    const {className, style, name, size } = props;
    
    return (
        <>
            <div>
                <i className={'o-icon' + ' ' + 'o-icon-' + name + ' ' + className} style={{
                    fontSize: (typeof size === "number" ? size + 'em' : size) || '1em',
                    ...style
                }}></i>
            </div>
        </>
    )
})

export default Icon;