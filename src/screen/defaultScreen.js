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
        //       : 1 - 
        //       : 2 - 

        if (index>0){
            console.log(index)
            // Navigator.setRootScreen(ScreenConst.)
        }
    }

    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        
        </View>
    )
}