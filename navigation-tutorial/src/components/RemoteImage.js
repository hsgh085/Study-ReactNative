import React from 'react';
import { Image } from 'react-native';
const RemoteImage = (props) => {
    return (
        <Image source={{url:props.url}}
        style={[props.style, { width: props.width, height: props.height }]}/>
    );
};

export default RemoteImage;