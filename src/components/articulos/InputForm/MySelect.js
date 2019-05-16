import Select from 'react-select';

class MySelect extends React.Component {
    handleChange = value => {
      // this is going to call setFieldValue and manually update values.topcis
      this.props.onChange('topics', value);
    };
  
    handleBlur = () => {
      // this is going to call setFieldTouched and manually update touched.topcis
      this.props.onBlur('topics', true);
    };
  
    render() {
      return (

          <Select
            id="color"
            options={options}
            multi={true}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={this.props.value}
          />

      );
    }
  }
  