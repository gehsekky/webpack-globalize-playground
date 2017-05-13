import Globalize from 'globalize';
import { connect } from 'react-redux';
import LocalePicker from '../components/LocalePicker';
import { setLocale } from '../reducers'

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
    supportedLocales: [
      { code: 'en-US', name: 'English (US)' },
      { code: 'de-DE', name: 'Deutsch' }
    ],
    message: Globalize.formatMessage('message')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch(setLocale(e.target.value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalePicker)