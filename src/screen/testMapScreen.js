import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Navigator, ScreenConst } from '../navigation'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default (props) => {

    const screenFunc = (index) => {
        // go Next Screen
        // index : 0 - popScreen
        //       : x>0 - pushScreen 
        //       : x<0 - setRootScreen
        pushList = []
        setRootList = []

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

    return(
        <View style={{flex:1}}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex:1}}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}