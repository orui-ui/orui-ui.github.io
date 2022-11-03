
import React, { useState } from "react";

import {Input} from "orui-ui"

export default () => {
    const v = useState('')
    const d = useState('')
    const w = useState('')

    return (
        <>
            <div style={{display: 'flex'}}>
                <Input models={v} placeholder="Please input" size="small" />
                <Input models={d} placeholder="Please input" size="middle" />
                <Input models={w} placeholder="Please input" size="large" />
            </div>
        </>
    )
}