import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Navigator, ScreenConst } from '../../navigation'

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

    const topBarHeight = Platform.OS === 'ios' ? '13%' : '10%'
    const mainHeight = Platform.OS === 'ios' ? '88%' : '90%'
    const topInnerHeight = Platform.OS === 'ios' ? '80%' : '100%'

    return(
        <View style={{flex:1}}>
            <View style={{height:topBarHeight, flexDirection:'row', borderBottomWidth:1, backgroundColor:props.topBackgroundColor}}>
                <View
                    style={{flex:1, flexDirection:'column', justifyContent:'flex-end'}}
                >
                    <View style={{height:topInnerHeight, width:'100%', alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={() => screenFunc(0)}
                        >
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{flex:3, flexDirection:'column', justifyContent:'flex-end'}}
                >
                    <View style={{height:topInnerHeight, width:'100%', alignItems:'center', justifyContent:'center'}}>
                        <Text>Mid</Text>
                    </View>
                </View>
                <View
                    style={{flex:1, flexDirection:'column', justifyContent:'flex-end'}}
                >
                    <View style={{height:topInnerHeight, width:'100%', alignItems:'center', justifyContent:'center'}}>
                        <Text>Right Button</Text>
                    </View>
                </View>
            </View>
            <View style={{height:mainHeight, backgroundColor:props.mainBackgroundColor}}>

            </View>
        </View>
    )
}