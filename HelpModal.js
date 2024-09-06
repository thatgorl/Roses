import React from "react";

// quick access if client needs assistance + from boostrap

function HelpModal() {
  return (
    <div d-flex justify-content-center align-items-center vh-100>
      <button
        type="button"
        class="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        How can we best assist you?
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class=" modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                How can I improve your experience?
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {" "}
              If the rose you need is not available on our page ,reach out. Let
              us know and we will do our best to source it for you.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
