import React from "react";
import PropTypes from "prop-types";

import {
  getFlavor,
  cleanProps,
  propTypes as flavorsPropTypes,
  defaultProps as flavorsDefaultProps
} from "../flavors";

const Alert = props => (
  <div
    className={`alert ${getFlavor(props, "alert")}`}
    {...cleanProps(props)}
  />
);

Alert.propTypes = {
  ...flavorsPropTypes,
  style: PropTypes.object
};

Alert.defaultProps = {
  ...flavorsDefaultProps
};

export default Alert;
