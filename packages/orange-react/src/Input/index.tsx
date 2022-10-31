
import React, { FC, forwardRef, memo } from "react";

import withModel from '../utils/withModel'



// interface InputProps extends HTMLInputElement {
//     /**
//      * @description 双向绑定
//      */
//     models: String | Boolean | Number;
// }

// const ax: FC <InputProps> = memo(()=>{
//     return (
//         <>
            
//         </>
//     )
// })

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Component = forwardRef<HTMLInputElement, Props>((props, outerRef) => {

    let { type } = props;
    
    if(!type) type = 'text';
    
    let element = <input ref={outerRef} {...props} />

    return (
        <>
            {!['checkbox', 'file', 'radio'].includes(type) && element}
        </>
    )
})


Component.displayName = 'Input'

export default withModel(Component );