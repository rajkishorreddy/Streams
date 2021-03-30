import React from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends React.Component {
  // renderInput(formProps) {
  //   return <input {...formProps.input} />;
  // }
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <div>{meta.error}</div>
      </div>
    );
  }
  onSubmit(formValues) {
    // event.preventDefault(); na na not with redux form
    console.log(formValues);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
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
export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
