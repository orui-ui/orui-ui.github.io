
import React, { forwardRef, useMemo, useCallback, useEffect } from 'react'

// 双向绑定工具方法

// const withModel = (component) => {}

const withModel = (Component: any) => forwardRef((props, outerRef) => {

    const p =  {
      models: [],
      name: '',
      value: '',
      onChange: (event: any) => {},
      ...props,
    } 
    
    const { models = [], name, value, onChange, ...other } = p;

    const [modelValue, setModelValue] = useMemo(() => models, [models])
    
    const handleChange = useCallback((event: any) => {
          if (setModelValue) {
              const setValue = setModelValue as Function;
              setValue(event.target.value)
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