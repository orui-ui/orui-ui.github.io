
import React, { useState } from "react";

import {Input} from "orui-ui"

export default () => {

    // 
    const v = useState('')
    const a = useState('')
    // 
    return (
        <>
            <Input models={v} clearable placeholder="Please input" />
        </>
    )
}