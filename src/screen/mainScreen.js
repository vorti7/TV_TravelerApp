import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text,
    Button
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
            Navigator.setRootScreen(ScreenConst.TV_TEST)
        }
    }
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is Main Screen.</Text>
            <Button
                title="go Test"
                onPress={() => {screenFunc(1)}}
            />
        </View>
    )
}