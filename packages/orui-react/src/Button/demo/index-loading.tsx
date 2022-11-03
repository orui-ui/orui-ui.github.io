
import React, { useCallback, useState } from "react";
import { Button } from "orui-ui"

export default () => {

    let [loadingState, setLoadingState] = useState(false);

    let handeClick = () => {
        setLoadingState(true)
        console.log(loadingState)
    }

    return (
        <>
           <div style={{display: 'flex'}}>
                <Button type="default" loading={loadingState} 
                onClick={(event: any) => handeClick()}> default - 点击开启loading</Button>
            
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
