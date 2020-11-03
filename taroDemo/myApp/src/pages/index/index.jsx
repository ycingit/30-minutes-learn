import React, { useState, useEffect, useReducer } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton, AtInput, AtList, AtListItem, AtToast } from 'taro-ui'
import Taro from '@tarojs/taro'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
import './index.scss'


const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: 'FETCH_INIT' });
      wx.showToast({

        title: '成功',

        icon: 'success',

        duration: 2000//持续的时间

      })
      try {
        const requestTask = Taro.request({
          url: url, //仅为示例，并非真实的接口地址
          header: {
            'content-type': 'application/json'
          },
          success (result) {
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          }
        })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' });
      }

    };

    fetchData();
  }, [url]);

  return [state, setUrl];
}

function HowFetchData() {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  return (
    <Block>
      <AtInput
        type="text"
        value={query}
        onChange={event => {
          setQuery(event)
        }}
      />
      <AtButton type="submit" onClick={() => doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`)}>
        Search
      </AtButton>

      {isError && <View>Something went wrong ...</View>}

      {isLoading ? (
        <View>Loading ...</View>
      ) : (
        <AtList>
          {data.hits.map(item => (
            <AtListItem key={item.objectID} title={item.title}>
            </AtListItem>
          ))}
        </AtList>
      )}
    </Block>
  );
}

export default HowFetchData;

function Block (props) {
  return props.children
}

// function App() {
//   const [data, setData] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = () => {
//       // const result = await axios(
//       //   'https://hn.algolia.com/api/v1/search?query=redux',
//       // );

//     const requestTask = Taro.request({
//       url: 'https://hn.algolia.com/api/v1/search?query=redux', //仅为示例，并非真实的接口地址
//       header: {
//         'content-type': 'application/json'
//       },
//       success (result) {
//         setData(result.data);
//       }
//     })

//     };

//     fetchData();
//   }, []);

//   return (
//     <AtList>
//       {data.hits.map(item => (
//         <AtListItem key={item.objectID} title={item.title}>
//         </AtListItem>
//       ))}
//     </AtList>
//   );
// }

// export default App;

// function Home () {
//   const [ isShow, setIsShow ] = useState(false)

//   useEffect(() => {
//     const requestTask = Taro.request({
//       url: 'https://hn.algolia.com/api/v1/search?query=redux', //仅为示例，并非真实的接口地址
//       header: {
//         'content-type': 'application/json'
//       },
//       success (res) {
//         console.log(res.data)
//       }
//     })
//   }, []);

//   return (
//     <View className='index'>
//       <Text>Hello world!</Text>
//       <AtButton type='primary'>I need Taro UI</AtButton>
//       <Text>Taro UI 支持 Vue 了吗？</Text>
//       <AtButton type='primary' circle={true} onClick={() => {setIsShow(!isShow)}}>支持</AtButton>
//       {
//         isShow && (
//           <>
//             <Text>共建？</Text>
//             <AtButton type='secondary' circle={true}>来</AtButton>
//           </>
//         )
//       }
//     </View>
//   )
// }

// export default Home
