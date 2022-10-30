
import React from "react";
import { Button } from "orange-ui"

export default () => {
    return (
        <>
           <div style={{display: 'flex'}}>
                <Button type="default"> default</Button>

                <div style={{width: '20px'}}></div>
                <Button type="primary" size="middle"> primary</Button>
                
                <div style={{width: '20px'}}></div>
                <Button type="success" size="large" radius> success</Button>

                <div style={{width: '20px'}}></div>
                <Button type="warning" width="200px"> waring - custom size</Button>

                <div style={{width: '20px'}}></div>
                <Button type="danger" width="200px"> danger - custom size</Button>

                <div style={{width: '20px'}}></div>
                <Button type="text"> text</Button>
           </div>
        </>
    )
}
