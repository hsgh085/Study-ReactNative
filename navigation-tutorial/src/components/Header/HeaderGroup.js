import React from 'react';
import { View } from 'react-native';

const HeaderGroup = (props) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
            {props.children}
        </View>
    );
};

export default HeaderGroup;