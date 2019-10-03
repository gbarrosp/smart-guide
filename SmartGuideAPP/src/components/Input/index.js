import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import {Container, TInput, TouchableOpacity} from './styles';

function Input({style, icon, secureTextEntry, onShowPass, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <TInput {...rest} secureTextEntry={secureTextEntry} ref={ref} />
      {onShowPass && (
        <TouchableOpacity onPress={onShowPass}>
          <Icon
            name={secureTextEntry == false ? 'eye' : 'eye-off'}
            size={20}
            color="rgba(255, 255, 255, 0.6)"
          />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
