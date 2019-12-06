import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';
  import { Navigator, ScreenConst } from '../navigation'
  import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

export default (props) => {

    const screenFunc = (index) => { // const가 없으면 한번밖에 실행 안된다.. 왜?
        // go Next Screen
        // index : 0 - popScreen
        //       : x>0 - pushScreen 
        //       : x<0 - setRootScreen
        pushList = [ScreenConst.TV_TEST]
        setRootList = []

        if (index > 0){
            if(index>=pushList.length){
                Navigator.pushScreen(props.componentId, pushList[index-1])
            }
        } else if(index == 0){
            Navigator.popScreen(props.componentId)
        } else if(index < 0) {
            if(-index<=setRootList.length){
                Navigator.setRootScreen(setRootList[-index-1])
            }
        }
    }

    const [tabState, setTabState] = useState({
      index: 0,
      routes: [
        {
          key: 'first',
          title: 'First Route',
        },
        {
          key: 'second',
          title: 'Second Route',
        },
        {
          key: 'third',
          title: 'Third Route',
        },
      ],
    });

    const tabContents = ({ route }) => {
      switch (route.key) {
        case 'first':
          return (
            <View
              style={{
                flex:1,
                backgroundColor:'red'
              }}
            >
            </View>
          );
        case 'second':
          return (
            <View
              style={{
                flex:1,
                backgroundColor:'green'
              }}
            >
            </View>
          );
        case 'third':
          return (
            <View
              style={{
                flex:1,
                backgroundColor:'blue'
              }}
            >
            </View>
          );
        default:
          return null;
      }
    };

    return(
        <View style={{flex:1}}>
            {/* <Text>This is Main Screen.</Text>
            <Button
                title="go Test"
                onPress={() => {
                    screenFunc(1)
                }}
            /> */}
            <TabView
              {...props}
              navigationState={tabState}
              renderScene={tabContents}
              tabBarPosition="bottom"
              onIndexChange={index => {
                setTabState({ ...tabState, index });
                console.log(
                  'TabIndex Changed-----------------------------------------',
                );
              }}
            />
        </View>
    )
}