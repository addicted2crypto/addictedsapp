import React from 'react'
import Modal from '../../components/Modal'
import ProjectForm from '../../components/ProjectForm'

const CreateProject = () => {
  return (
    <Modal>
        <h3 className="modal-head-text">CreateProject</h3>
        <ProjectForm />
    </Modal>
  )
}

export default CreateProject