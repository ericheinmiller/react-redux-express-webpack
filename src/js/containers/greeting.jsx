import React from 'react';
import { connect } from 'react-redux';

const Greeting = (props) => {
  console.log(props);
  return (
    <div>
      { props.greeting }
    </div>
  );
};

const mapStateToProps = state => ({ greeting: state.greeting });

export default connect(mapStateToProps)(Greeting);
