import React, { useEffect, useMemo, FC, memo } from 'react';

import Icon from "../Icon";

// Button

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
    onClick: Function ;
}


//原生button接口
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; 

// 
const Button: FC <ButtonProps & NativeButtonProps> = memo((props) => {
    const { type, size, disabled, radius, loading, onClick, children, className, style } = props;
    // 
    // 类型列表
    const typeList:Array<String | undefined> = ['default', 'primary', 'success', 'warning', 'danger', 'text'];

    return (
        <div >
            <button 
                className={
                    (size?.includes('middle') ? 'o-button-middle' : size?.includes('large') ? 'o-button-large' : 'o-button-small') 
                    + ' ' 
                    + 'o-button' 
                    + ' '
                    + 'o-button' + (typeList.includes(type) && !type?.includes('default') ? `-${type}` : '')
                    + `${radius ? ' o-button-radius' : ''}`
                    + `${typeof className === 'string' ? ' ' + className : ''}`
                }
                style={style}
                disabled={disabled}
                onClick={ (event) => {
                    if(loading){
                        return
                    }
                    if(typeof onClick === 'function') onClick(event)
                }}>
                {loading && <div style={{margin: '5px 10px 5px 5px'}}><Icon name="loading" spin size={1.5} /></div>}
                {children}
            </button>
        </div>
    )
})

export default Button