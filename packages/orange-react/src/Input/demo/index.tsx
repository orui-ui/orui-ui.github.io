
import React from "react";

import {Input} from "orange-ui"

export default () => {

    return (
        <>
            <div style={{display: 'flex'}}>
                <Input placeholder="Please input" size="small" />
                <Input placeholder="Please input" size="middle" />
                <Input placeholder="Please input" size="large" />
            </div>
        </>
    )
}