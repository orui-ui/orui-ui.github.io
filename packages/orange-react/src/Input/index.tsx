
import React, { forwardRef } from "react";
import './index.module.less';

import withModel from '../utils/withModel'


type inputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Component = forwardRef<HTMLInputElement, inputProps>((props, outerRef) => {

    const p = {...props};
    let { type } = props;
    
    if(!type) type = 'text';
    
    // 删除部分属性
    let {size = 'small'} = p;


    let element = <input className={
        `o-input o-input-border ${['small', 'middle', 'large'].includes(size as string) ? 'o-input-' + size : ''}`
    } ref={outerRef} {...props} />

    return (
        <>
            {!['checkbox', 'file', 'radio'].includes(type) && element}
        </>
    )
})


Component.displayName = 'Input'

export default withModel(Component );