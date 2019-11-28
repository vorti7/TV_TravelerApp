import React, { useState, useCallback, useEffect } from 'react';
import {
    View,
    Text
  } from 'react-native';
import { Navigation } from "react-native-navigation";

export default (props) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>This is Login Screen.</Text>
        </View>
    )
}