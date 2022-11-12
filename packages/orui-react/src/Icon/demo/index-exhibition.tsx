import React from "react"
import { Icon } from "orui-ui"

// icon 展示列表

export default () => {

  // icon 集合列表
  const iconList: Array<string> = [
    'loading', 'closeFill', 'close', 'eye', 'eyeClose',
    'down', 'top', 'left', 'right', 'findUser', 'addUser', 'roundTop',
    'roundDown', 'roundLeft', 'roundRight', 'circleTop', 'circleDown', 'circleLeft',
    'circleRight', 'circleAdd', 'delete', 'edit', 'start', 'semistar', 'startFill', 'userLine',
    'message', 'setting', 'user', 'reduce', 'arrowRight', 'arrowLeft', 'arrowTop', 'arrowDwon',
    'add', 'circlereduce', 'search', 'circleReduceFill', 'circleMessage'
  ]

  // 点击写入剪切板
  const onclickExecCommand = (iconName) => {
    navigator.clipboard.writeText(` <Icon name={${iconName}}></Icon>`)
    // TOPO:// 带接入弹窗提醒
  }

  return (
    <>
      <ol style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0
      }}>
        {
          iconList.map(key => {
            return (
              <li style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                width: '95px',
                margin: 0,
                padding: '20px',
                border: '1px solid #ccc'
              }} onClick={() => onclickExecCommand(key)}>
                <Icon name={key}></Icon>
                <br />
                <span>{key}</span>
              </li>
            )
          })
        }

      </ol>
    </>
  )
}
