import React from "react";
import { Text } from "react-native";

// export class Typography extends React.Component {
//   render() {
//     return (
//       <RNText
//         style={{ color: this.props.color, fontSize: this.props.fontSize }}
//       >
//         {this.props.children}
//       </RNText>
//     );
//   }
// }

const Typography = (props) => {
  return (
    <Text style={{color:props.color, fontSize:props.size}}>
      {props.children}
    </Text>
  );
};

export default Typography;