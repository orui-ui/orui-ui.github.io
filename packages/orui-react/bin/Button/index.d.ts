import React, { FC } from 'react';
import './index.module.less';
interface ButtonProps {
    /**
     * @description 类名
     */
    className?: String;
    /**
     * @description 节点样式
     */
    style?: Object;
    /**
     *@description 按钮主题： default、primary、success、warning、danger、text
     *@default default
    */
    type?: String;
    /**
    * @description 大小： small、middle、large
    * @default small
    */
    size?: String;
    /**
     *@description 禁用状态
     *@default false
    */
    disabled?: Boolean;
    /**
     * @description 圆角状态
     * @default false
     */
    radius?: Boolean;
    /**
     * @description 加载状态
     * @default false
     */
    loading?: Boolean;
    /**
     * @description 按钮点击回调事件
     */
    onClick: Function;
}
declare type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
declare const Button: FC<ButtonProps & NativeButtonProps>;
export default Button;
