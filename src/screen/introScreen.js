import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Navigator, ScreenConst } from '../navigation'

export default (props) => {

    const screenFunc = (index) => {
        // go Next Screen
        // index : 0 - popScreen
        //       : x>0 - pushScreen 
        //       : x<0 - setRootScreen
        pushList = []
        setRootList = [ScreenConst.TV_LOGIN, ScreenConst.TV_MAIN]

        if (index > 0){
            if(index<=pushList.length){
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

    useState(() => {
        return timer = setTimeout(() => {
            screenFunc(-2)
        }, 3000)
    })

    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is Intro Screen.</Text>
        </View>
    )
}