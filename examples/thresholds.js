/* eslint react/no-multi-comp: 0, no-console: 0 */
import 'rc-slider/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Range, createSliderWithTooltip } from 'rc-slider';

const RangeWithTooltip = createSliderWithTooltip(Range);
const style = { width: 400, margin: 50 };

export const thresholdColors = [
  { backgroundColor: '#E89EA6' },
  { backgroundColor: '#E8C3C3' },
  { backgroundColor: '#C3E8E6' },
  { backgroundColor: '#A3D8D9' },
  { backgroundColor: '#88CBD1' },
];

export const findThresholdColor = (range, value) => {
  if (value <= 0) return thresholdColors[0].backgroundColor;
  if (value >= 100) return thresholdColors[thresholdColors.length - 1].backgroundColor;

  const len = range.length;

  for (let i = 0; i < len; i++) {
    if (value < range[i]) {
      return thresholdColors[i - 1].backgroundColor;
    }
  }
}

ReactDOM.render(
  <div>
    <div style={style}>
      <RangeWithTooltip
        defaultValue={[0, 25, 50, 75, 90, 100]}
        pushable={6}
        trackStyle={thresholdColors}
        marks={{ 0: '0%', 100: '100%' }}
        tipFormatter={(value) => `${value}%`}
        onAfterChange={() => { console.log('on after change') }}
      />
    </div>
  </div>,
  document.getElementById('__react-content')
);
