import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT, ADD, CLEAR } from "../store/actions/actions";

class ReduxTestContainer extends React.Component {
  render() {
    return (
      <div>
        Counter: {this.props.ctr}
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <button onClick={this.props.onChangeData}>Change Data</button>
        Data is {this.props.data}
        <button onClick={this.props.onClearData}>Clear Data</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    ctr1: state.res.counter,
    data: state.res.data
  };
};

const mapDisptahcToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: INCREMENT }),
    onDecrement: () => dispatch({ type: DECREMENT }),
    onChangeData: () => dispatch({ type: ADD, payload: "ok world!" }),
    onClearData: () => dispatch({ type: CLEAR })
  };
};

export default connect(
  mapStateToProps,
  mapDisptahcToProps
)(ReduxTestContainer);
