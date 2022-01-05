import * as React from 'react';
import Svg, {
  Mask,
  Circle,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Icon(props) {
  return (
    <Svg
      width={111}
      height={111}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Mask
        id='prefix__a'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={111}
        height={111}
      >
        <Circle cx={55.191} cy={55.191} r={55.191} fill='#0063DA' />
      </Mask>
      <G mask='url(#prefix__a)'>
        <Circle
          cx={55.191}
          cy={55.191}
          r={55.191}
          fill='url(#prefix__paint0_linear_317_3075)'
        />
        <Path
          d='M33.534 86.978c2.375 6.567-.408 14.613-2.096 17.815v2.969c12.459 3.784 37.935 9.082 40.17 0 2.795-11.353 6.987-15.02 8.21-16.767.977-1.397 2.503-1.28 3.143-1.048 2.445.117 8.034.14 10.829-.698 3.493-1.048 3.143-4.541 2.969-6.113-.14-1.258-1.106-3.435-1.572-4.367v-.524c-.175.117.035-.07 2.27-1.746 2.236-1.677 1.281-3.26.524-3.843l-1.746-1.048v-.349c.233-.233.908-.873 1.746-1.572 1.048-.873 1.048-1.572.524-2.27-2.096-2.62-2.27-6.113 2.096-9.082 4.366-2.97-1.222-7.51-2.62-8.384-5.449-3.493-9.49-14.38-10.828-19.387-.99-3.318-2.97-10.366-8.034-14.496-22.706-18.513-59.383-7.51-64.623 22.53-5.24 30.041 16.069 40.171 19.038 48.38z'
          fill='#FCFAF8'
        />
        <G filter='url(#prefix__filter0_d_317_3075)'>
          <Path
            d='M35.455 84.533c2.27 2.445 1.747 8.907 1.747 11.352 0 1.822-2.12 7.822-3.4 11.178 7.76 4.611 23.897 4.716 30.995 4.192 1.816-10.479 5.414-19.736 6.986-23.054 1.63-2.911 3.388-10.06-2.62-15.37C53.27 59.557 57.461 51.872 49.427 40.345c-8.034-11.527-14.845-5.24-14.496-5.24.35 0 8.733 18.165 9.082 27.421.28 7.406-3.842 6.812-5.938 5.59-3.493-2.62-10.654-9.537-11.353-16.244-1.746-13.623 4.89-23.403 6.637-26.896 1.397-2.795-.116-4.541-1.048-5.065-.757-.524-2.794-1.258-4.89 0-2.62 1.572-10.305 13.099-11.003 29.516-.699 16.418 16.767 32.66 19.037 35.106z'
            fill='url(#prefix__paint1_linear_317_3075)'
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id='prefix__paint0_linear_317_3075'
          x1={55.191}
          y1={0}
          x2={55.191}
          y2={110.382}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#0063DA' />
          <Stop offset={1} stopColor='#1E2937' />
        </LinearGradient>
        <LinearGradient
          id='prefix__paint1_linear_317_3075'
          x1={44.872}
          y1={19.216}
          x2={44.872}
          y2={111.47}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#FBBA00' />
          <Stop offset={1} stopColor='#EEB000' />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Icon;
