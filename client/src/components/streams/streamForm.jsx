import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  // renderInput(formProps) {
  //   return <input {...formProps.input} />;
  // }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // event.preventDefault(); na na not with redux form
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title =
      "what in the world made you think you can create a stream without a title";
  }
  if (!formValues.description) {
    errors.description = "tell people what this stream is about ";
  }
  return errors;
};
export default reduxForm({ form: "streamForm", validate })(StreamForm);
