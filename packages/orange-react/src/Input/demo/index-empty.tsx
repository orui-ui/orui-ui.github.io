
import React, { useState } from "react";

import {Input} from "orange-ui"

export default () => {

    // 
    const v = useState('')
    // 
    return (
        <>
            <Input models={v} clearable placeholder="Please input" />
        </>
    )
}