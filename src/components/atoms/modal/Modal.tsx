import React from 'react'

interface ModalProps {
  children: React.ReactNode
  handleCloseModal: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, handleCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>{children}</div>
        <button type="button" className="modal-button" onClick={handleCloseModal}>
          Open/Close
        </button>
      </div>
    </div>
  )
}
