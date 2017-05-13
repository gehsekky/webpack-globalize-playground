import React from 'react';
import PropTypes from 'prop-types';

class LocalePicker extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
    supportedLocales: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired
  }

  render() {
    const {
      handleChange,
      supportedLocales
    } = this.props;

    return (
      <div>
        <select onChange={handleChange}>
        {
          supportedLocales.map(supportedLocale => <option key={supportedLocale.code} value={supportedLocale.code}>{supportedLocale.name}</option>)
        }
        </select>
      </div>
    );
  }
}

export default LocalePicker;
