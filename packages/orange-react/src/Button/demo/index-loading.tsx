
import React from "react";
import { Button } from "orange-ui"

export default () => {
    return (
        <>
           <div style={{display: 'flex'}}>
                <Button type="default" loading> default</Button>

                <div style={{width: '20px'}}></div>
                <Button type="primary" size="middle" loading> primary</Button>
                
                <div style={{width: '20px'}}></div>
                <Button type="success" size="large" loading> success</Button>

                <div style={{width: '20px'}}></div>
                <Button type="warning" width="200px" loading> waring</Button>

                <div style={{width: '20px'}}></div>
                <Button type="danger" width="200px" loading> danger</Button>

           </div>
        </>
    )
}
