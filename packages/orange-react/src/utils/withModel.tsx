
import React, { forwardRef, useMemo, useCallback, useEffect } from 'react'

// 双向绑定工具方法

// const withModel = (component) => {}

const withModel = (Component) => forwardRef((props, outerRef) => {

    console.log(props, outerRef)

    const {
        models = [],
        name,
        value,
        onChange,
        ...other
      } = props;
    const [modelValue, setModelValue] = useMemo(() => models, [models])
    
    const handleChange = useCallback((event: any) => {
        if (setModelValue) {
        setModelValue(event.target.value)
        }
        
        if(typeof onChange === 'function') onChange(event)
    }, [onChange])

  return (
    <Component
      {...other}
      ref={outerRef}
      name={name}
      value={modelValue !== undefined ? modelValue : value}
      onChange={handleChange}
    />
  )
})

export default withModel