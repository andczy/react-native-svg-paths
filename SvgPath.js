"use strict";
import React,{ Component ,PropTypes} from 'react';
import { 
  View
} from 'react-native';
import Svg,{
    Circle,
    Path
} from 'react-native-svg';
import constants from '../constants';
export default class SvgPath extends Component {
  static propTypes = {
        ...View.propTypes,
        opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        // more detail https://svgwg.org/svg2-draft/coords.html#ViewBoxAttribute
        pathD: PropTypes.oneOfType([PropTypes.array,PropTypes.string]),
        viewBox:PropTypes.string,
        fillColor: PropTypes.string ,
        strokeColor:PropTypes.string ,
        
  };
  static defaultProps={
    fillColor:constants.colors.tabColor,
    viewBox:"0 0 1024 1024"
  };
  constructor(props){
      super(props);
  }
  
  render() {
    let pathInfo = this.props.pathD ;
    if( typeof pathInfo == "string"){
      pathInfo = [{d:this.props.pathD}];
    }
    return (
      <Svg {...this.props}>
        {
          pathInfo.map((item ,index)=>{
            return (
              <Path
                d={item}
                fill ={this.props.fillColor}
                fillRule="evenodd"
                strokeColor={this.props.strokeColor}
                />
            );
          })
        }
      </Svg> 
    );
  }
}