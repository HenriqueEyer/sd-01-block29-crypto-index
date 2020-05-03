import {
  func,
  shape,
  string,
  bool,
  arrayOf,
} from 'prop-types';

export default attributesType = shape({
  id: string,
  type: string.isRequired,
  onClick: func,
  onChange: string,
  label: string,
  valid: bool,
  options: arrayOf(string),
});
