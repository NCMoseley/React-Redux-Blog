import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/";

class PostsNew extends Component {
  renderField(field) {
    const className = `form-group ${
      field.meta.touched && field.meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {/* The three meta states of the input fields are "pristine", "touched", "invalid" */}
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
    // This will display the strings provided in the validation function.
  }

  onSubmit(values) {
    console.log(values);
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* These field names are not arbitrary, they are necessary for built in validation function */}
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: "agsas", categroies: "sadfasdf", content: "jsgdjhsd"}
  const errors = {};

  // Validate the inputs from 'values'

  if (values.title && values.title.length < 3) {
    errors.title = "Title must be at least 3 characters";
  }
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (values.categories && values.categories.length < 3) {
    errors.categories = "Categories must be at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  // If errors is empty, the form is fine to submit
  // If arrors has *any* properties, redus form assumes form is invalid.
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
