
import React, { forwardRef, useMemo, useCallback, useEffect } from 'react'

// 双向绑定工具方法

// const withModel = (component) => {}

const withModel = (Component: any) => forwardRef((props, outerRef) => {

    const p =  {
      models: [],
      name: '',
      value: '',
      onChange: (event: any) => {},
      type: 'text',
      ...props,
    } 
    
    const { models = [], name, value, onChange, type, ...other } = p;

    const [modelValue, setModelValue] = useMemo(() => models, [models])
    
    const handleChange = useCallback((event: any) => {
          if (setModelValue) {
              const setValue = setModelValue as Function;
              setValue(event.target.value)
          }
        
          if(typeof onChange === 'function') onChange(event)
    }, [onChange])

    // 清空内容函数
    const cleanContent = () :void => {
      if (setModelValue) {
          const setValue = setModelValue as Function;
          setValue('');
      }
    }

    // 
    const ot = {
      type,
      cleanContent,
      ...other
    }

  return (
    <Component
      {
        ...ot
      }
      ref={outerRef}
      name={name}
      value={modelValue !== undefined ? modelValue : value}
      onChange={handleChange}
    />
  )
})

export default withModel