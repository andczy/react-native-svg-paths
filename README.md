# react-native-svg-paths
基于[react-native-svg](https://github.com/react-native-community/react-native-svg)

  用于显示svg图片（svg图片内容将path内容转为json数组)。
## Getting started
![](shot/run200.png).

### Mostly automatic install with react-native
1. `npm install react-native-svg-paths`
2. `react-native link react-native-svg`

## Usage
```
import SvgPath from 'react-native-svg-paths' ;
...
<SvgPath
	viewBox="0 0 1024 1024"//设置为原svg图的viewBox值，默认0 0 1024 1024
        width={20}
        height={20}
        pathD={require("../../svg/gift.json")} //可以是svg的d值字符串；[{"d":"xxx},{"d":"yyy"}],	[{"d":"xxx,"fill":"0xff0000"},				{"d":"yyy","fill":"0xff0000"}]
	fillColor="#999" //如果svg的path没有fill字段，可通过此设置图片颜色。
        />
```
[more about svg go to](https://github.com/chinaczy/react-native-svg)
