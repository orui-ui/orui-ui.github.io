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
     * @description 颜色
     * @default 2em
     */
     color?: String;
    /**
     * @description 旋转
     */
    spin:Boolean;
    /**
     * @description 点击事件
     */
    onClick?: Function | undefined;
}

const Icon : FC<IconProps> = memo ( props => {

    const {className, style, name, size, spin, color } = props;

    // 大小
    let iconSize = '2em';
    if(size !== undefined){
        if(typeof size === "number"){
            iconSize = `${size}em`
        }else{
            iconSize = size as string;
        }
    }

    // 颜色
    let iconColor = '';
    if(size !== undefined){
        iconColor = size as string;
    }
    
    return (
        <>
            <div >
                {
                    !spin && <i className={'o-icon' + ' ' + 'o-icon-' + name + ` ${className ? className : ''}`} style={{
                        fontSize: iconSize,
                        color: iconColor,
                        ...style
                    }}></i>
                }
                {/* 带旋转 */}
                {
                    spin && <div className={'o-icon' + ' ' + 'o-icon-' + name + ` ${className ? className : ''}` + `${spin ? ' o-icon-spin' : ''}`} style={{
                        fontSize: iconSize,
                        color: iconColor,
                        ...style
                    }}></div>
                }
            </div>
        </>
    )
})

export default Icon;