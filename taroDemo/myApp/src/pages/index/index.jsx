import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

function Home () {
  const [ isShow, setIsShow ] = useState(false)

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary'>I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type='primary' circle={true} onClick={() => {setIsShow(!isShow)}}>支持</AtButton>
      {
        isShow && (
          <>
            <Text>共建？</Text>
            <AtButton type='secondary' circle={true}>来</AtButton>
          </>
        )
      }
    </View>
  )
}

export default Home
