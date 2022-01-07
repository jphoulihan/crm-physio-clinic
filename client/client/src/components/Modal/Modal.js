import React from 'react'
import './Modal.css'
import FormGroupPersonInfo from "../Forms/FormGroupPersonInfo";
import FormGroupAddress from "../Forms/FormGroupAddress";

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000

}

export default function Modal ({ show, onClose }) {

    if (!show) return null
    
    return (
        <div className="modal-form  container-row" style={MODAL_STYLES}>
          <h1 className="pb-4">Update {}</h1>
          <form className="row" no validate>
            <FormGroupPersonInfo  />
            <FormGroupAddress  />
            <div className="btn-group p-2">
              <button type="button" className="btn btn-secondary shadow-none mb-3" onClick={onClose}>
                Close
              </button>
              <button type="submit" className="btn btn-primary shadow-none mb-3">
                Update
              </button>
            </div>
          </form>
        </div>
    )
}