/* eslint react/no-multi-comp: 0, no-console: 0 */
import 'rc-slider/assets/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

// const Range = Slider.Range;

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const style = { width: 400, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

class CustomizedRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40],
    };
  }
  onLowerBoundChange = (e) => {
    this.setState({ lowerBound: +e.target.value });
  }
  onUpperBoundChange = (e) => {
    this.setState({ upperBound: +e.target.value });
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({
      value,
    });
  }
  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  }
  render() {
    return (
      <div>
        <label>LowerBound: </label>
        <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
        <br />
        <label>UpperBound: </label>
        <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
        <br />
        <button onClick={this.handleApply}>Apply</button>
        <br /><br />
        <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
    };
  }
  onSliderChange = (value) => {
    log(value);
  }
  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  }
  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  }
  render() {
    return (
      <div>
        <label>Min: </label>
        <input type="number" value={this.state.min} onChange={this.onMinChange} />
        <br />
        <label>Max: </label>
        <input type="number" value={this.state.max} onChange={this.onMaxChange} />
        <br /><br />
        <Range defaultValue={[20, 50]} min={this.state.min} max={this.state.max}
          onChange={this.onSliderChange}
        />
      </div>
    );
  }
}

class ControlledRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [20, 40, 60, 80],
    };
  }
  handleChange = (value) => {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <Range value={this.state.value} onChange={this.handleChange} />
    );
  }
}

class ControlledRangeDisableAcross extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [20, 40, 60, 80],
    };
  }
  handleChange = (value) => {
    this.setState({
      value,
    });
  }
  render() {
    return (
      <Range
        value={this.state.value}
        onChange={this.handleChange}
        allowCross={false}
        {...this.props}
      />
    );
  }
}

// https://github.com/react-component/slider/issues/226
class PureRenderRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: false,
    };
  }
  handleChange = (value) => {
    console.log(value);
    this.setState({
      foo: !this.state.foo,
    });
  }
  render() {
    return (
      <Range defaultValue={[20, 40, 60, 80]} onChange={this.handleChange} allowCross={false} />
    );
  }
}

class DynamicCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100,
    };
  }
  onSliderChange = (value) => {
    log(value);
  }
  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  }
  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  }
  onCountChange = (e) => {
    console.log(e.target.value);
    console.log(this);
    this.setState({
      count: +e.target.value,
      defaultValue: [0, 50, 100],
    });
  }

  render() {
    return (
      <div>
        <Range count={4} defaultValue={[0, 25, 50, 75, 100]} pushable={5}
        trackStyle={[{ backgroundColor: '#EF8585' }, { backgroundColor: '#E4D172' }, { backgroundColor: '#B2CE7A' }, { backgroundColor: '#85C7CE' }]}
        handleStyle={[{ backgroundColor: '#eee' }, { backgroundColor: '#eee' }, { backgroundColor: '#eee' }, { backgroundColor: '#eee' }, { backgroundColor: '#eee' }]}
        railStyle={{ backgroundColor: 'black' }}
        marks={{0: '0%', 100: '100%'}}
        tipFormatter={value => `${value}%`}
        />
        <br />
        <label>Segments: </label>
        <input type="number" min={1} max={5} value={this.state.count} onChange={this.onCountChange} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <div style={style}>
      <Range count={4} defaultValue={[0, 25, 50, 75, 100]} pushable={5}
        trackStyle={[{ backgroundColor: '#EF8585' }, { backgroundColor: '#E4D172' }, { backgroundColor: '#B2CE7A' }, { backgroundColor: '#85C7CE' }]}
        handleStyle={[{ backgroundColor: '#eee' }, { backgroundColor: '#eee' }, { backgroundColor: '#eee' }, { backgroundColor: '#eee' }, { backgroundColor: '#eee' }]}
        railStyle={{ backgroundColor: 'black' }}
        marks={{0: '0%', 100: '100%'}}
        tipFormatter={value => `${value}%`}
      />
    </div>
  </div>
  , document.getElementById('__react-content'));
