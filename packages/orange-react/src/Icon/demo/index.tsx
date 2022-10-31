
import React from "react";

import { Icon } from "orange-ui"

export default () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Icon name="loading" size={2} />
                
                {/* 间距盒子 */}
                <div style={{width: '20px'}}></div>
                
                <Icon name="loading" size="3em" />
                
                {/* 间距盒子 */}
                <div style={{width: '20px'}}></div>

                <Icon name="loading" spin color="#cc0000" />
            </div>
        </>
    )
}

