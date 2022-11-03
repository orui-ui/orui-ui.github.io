
import React, { useState } from "react";

import {Input} from "orui-ui"

export default () => {
    // 
    const v = useState('')

    return (
        <>
            <div style={{display: 'flex'}}>
                <Input type="password" models={v} placeholder="Please input" size="small" />
            </div>
        </>
    )
}