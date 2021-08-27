import React, { Component } from "react";

export class SubmitModal extends Component {
  render() {
    return (
      <div>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">Form Submission Success!</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitModal;
