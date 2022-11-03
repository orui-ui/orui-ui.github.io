
import React from "react";
import { Button } from "orui-ui"

export default () => {
    return (
        <>
           <div style={{display: 'flex'}}>
                <Button type="default" disabled> default</Button>

                <div style={{width: '20px'}}></div>
                <Button type="primary" size="middle" disabled handeClick={() => alert('1')}> primary</Button>
                
                <div style={{width: '20px'}}></div>
                <Button type="success" size="large" disabled> success</Button>

                <div style={{width: '20px'}}></div>
                <Button type="warning" width="200px" disabled> waring</Button>

                <div style={{width: '20px'}}></div>
                <Button type="danger" width="200px" disabled> danger</Button>

                <div style={{width: '20px'}}></div>
                <Button type="text" disabled> text</Button>
           </div>
        </>
    )
}
