import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Navigator, ScreenConst } from '../navigation'

export default (props) => {

    screenFunc = (index) => {
        // go Next Screen
        // index : 0 - X
        //       : 1 - loginScreen
        //       : 2 - mainScreen
        let destinations = ['', ScreenConst.TV_LOGIN, ScreenConst.TV_MAIN]

        if (index>0){
            Navigator.setRootScreen(destinations[index])
        }
    }

    useState(() => {
        return timer = setTimeout(() => {
            screenFunc(2)
        }, 3000)
    })

    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is Intro Screen.</Text>
        </View>
    )
}