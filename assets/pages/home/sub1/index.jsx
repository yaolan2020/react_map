import React, { useState, useEffect } from 'react';
import './index.less';

/*
330100--杭州市  
330102--上城区  
330105--拱墅区   
330106--西湖区   
330108--滨江区   
330109--萧山区  
330110--余杭区   
330111--富阳区  
330112--临安区   
330113--临平区  
330114--钱塘区   
330122--桐庐县   
330127--淳安县  
330182--建德市
*/

const citys = [
  '330102',
  '330105',
  '330106',
  '330108',
  '330109',
  '330110',
  '330111',
  '330112',
  '330113',
  '330114',
  '330122',
  '330127',
  '330182'
];
const colors = [
  '#00ffff',
  '#0000ff',
  '#ff0000',
  '#ffff00',
  '#00ff00',
  '#ff00ff',
  '#aabfff',
  '#cccccc',
  '#3333aa',
  '#aa5555',
  '#bbbb44',
  '#999999',
  '#666666'
];
const Sub1 = (props) => {
  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    const mapPage = new window.AMap.Map('myMap', {
      viewMode: '2D',
      zoom: 11,
      center: [120.181841, 30.250104], //东经118°21′-120°30′,北纬29°11′-30°33′
      mapStyle: 'amap://styles/02caf54685eb4a5923252e66546f4c99'
    });
    for (let i = 0; i < citys.length; i++) {
      let distProvince = new window.AMap.DistrictLayer.Province({
        zIndex: 10,
        zooms: [2, 15],
        adcode: citys[i],
        depth: 2
      });

      distProvince.setStyles({
        'stroke-width': 2, //描边线宽
        fill: colors[i] //填充颜色
      });
      mapPage.add(distProvince);
    }
  };

  return <div id="myMap" className="myMap"></div>;
};
export default Sub1;
