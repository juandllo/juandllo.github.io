import React, { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal({ modalHandler, modalClose, dataObj }) {

    const [ hideModal, setHideModal ] = useState(modalHandler)
    const data = {...dataObj}

    const handleCloseModal = () => {
		modalClose(true)
    }

    useEffect(() => {
		setHideModal(modalHandler)
    }, [ modalHandler ])

    return (
	<div id='myModal' className='modal modal-lg' hidden={hideModal} role='dialog'>
	    <div className='modal-dialog modal-dialog-centered'>
			<div className='modal-content'>
				<div className='modal-header'>
					<h5 className='modal-title'>{data.nombreDepartamento}</h5>
					<button type='btn' className='close' onClick={() => handleCloseModal()}>
						<span aria-hidden='true'>&times;</span>
					</button>
				</div>
				<div className='modal-body'>
					<div className='container container-fluid'>
						{ data.secretarias.map((secretaria, index) => (
						<div key={index} className='card card-body mb-3 shadow p-3 rounded'>
							<h5 className='card-title fw-light'>{secretaria.nombreSecretaria}</h5>
							<div className='row'>
							{ secretaria.tutores.map((tutor, index) => (
								<div key={index} className='col-4'>
									<div className='d-flex align-text-center'>
										<div className='w-100 p-2'>
											{ tutor.nombreTutor }
										</div>
										<div className='flex-shrink-1'>
											<a className='text-decoration-none text-info fs-4' href={tutor.pdf} target='blank'>
												<i className='bi bi-file-earmark-pdf-fill'></i>
											</a>
										</div>
									</div>	
								</div>
							)) }
							</div>
						</div>
						)) }  
					</div>
				</div>
			</div>
	    </div>
	</div>
    )
}
