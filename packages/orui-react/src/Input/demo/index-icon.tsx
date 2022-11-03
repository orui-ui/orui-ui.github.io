
import React, { useState } from "react";

import {Input} from "orui-ui"

export default () => {
    
    const v = useState('')

    return (
        <>
            <div style={{display: 'flex'}}>
                <Input models={v} prefixIcon="user" placeholder="Please input" size="small" />
                <Input models={v} suffixIcon="search" placeholder="Please input" size="middle" />
            </div>
        </>
    )
}