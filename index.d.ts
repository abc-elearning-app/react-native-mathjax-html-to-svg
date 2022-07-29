declare module 'react-native-mathjax-html-to-svg' {
    import React from 'react';
    import {StyleProp, ViewStyle} from 'react-native';

    export interface Props {
        fontSize?: number
        color?: string
        fontCache?: boolean
        style?: StyleProp<ViewStyle>
    }

    export default class MathJaxSvg extends React.Component<Props> {}
}
