import React, { useState } from "react";
import { Input } from "orange-ui"

export default () => {

    const data = useState('我是输入的内容')

    return (
        <>
            <Input models={data} placeholder="请输入内容" />
            {/*  */}
            <p>{`我是输入的内容： ${data[0]}`}</p>
        </>
    )
}