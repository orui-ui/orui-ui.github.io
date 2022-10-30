
import React from "react";
import { Button } from "orange-ui"

export default () => {
    return (
        <>
           <div style={{display: 'flex'}}>
                
                <div style={{width: '20px'}}></div>
                <Button type="success"> success</Button>

                <div style={{width: '20px'}}></div>
                <Button type="warning" > waring</Button>

                <div style={{width: '20px'}}></div>
                <Button type="danger"> danger</Button>

           </div>
        </>
    )
}
