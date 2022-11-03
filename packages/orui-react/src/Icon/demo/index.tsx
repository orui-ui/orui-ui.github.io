
import React from "react";

import { Icon } from "orui-ui"

export default () => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Icon name="top" size={2} />
                
                {/* 间距盒子 */}
                <div style={{width: '20px'}}></div>
                
                <Icon name="setting" size="3em" />
                
                {/* 间距盒子 */}
                <div style={{width: '20px'}}></div>

                <Icon name="loading" spin color="#cc0000" />
            </div>
        </>
    )
}

