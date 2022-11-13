import { FC } from "react";
import './index.module.less';
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
    size?: String | Number;
    /**
     * @description 颜色
     * @default #8a8a8a
     */
    color?: String;
    /**
     * @description 旋转
     * @default false
     */
    spin?: Boolean;
    /**
     * @description 点击事件
     */
    onClick?: Function | undefined;
}
declare const Icon: FC<IconProps>;
export default Icon;
