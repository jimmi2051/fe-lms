import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
class Step1 extends Component {
  handleSubmit = () => {
    const { title } = this.refs;
    this.props.handleStepOne(title.value);
  };
  render() {
    return (
      <div className="row no-gutters">
        <div className="col-xl-12">
          <div className="form-group">
            <label>Title (*)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter training title here"
              ref="title"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <CKEditor
              className="form-control"
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              ref="description"
              //   onInit={editor => {
              //     // You can store the "editor" and use when it is needed.
              //     console.log("Editor is ready to use!", editor);
              //   }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.props.handleChangeDescription(data);
                // console.log({ event, editor, data });
              }}
              //   onBlur={(event, editor) => {
              //     console.log("Blur.", editor);
              //   }}
              //   onFocus={(event, editor) => {
              //     console.log("Focus.", editor);
              //   }}
            />
          </div>
          <div className="form-group">
            <label>Image </label>
            <input
              type="file"
              className="form-control"
              placeholder="Enter training title here"
              onChange={this.props.fileSelectHandler}
            />
          </div>
          <div className="form-group">
            <label>Required Training</label>
            <input type="text" className="form-control" placeholder="" />
          </div>
        </div>
        <div className="form-group col-xl-12">
          <button
            className="btn bg-root"
            style={{ width: "100%" }}
            onClick={this.handleSubmit}
          >
            CONTINUE
          </button>
        </div>
      </div>
    );
  }
}
export default Step1;
