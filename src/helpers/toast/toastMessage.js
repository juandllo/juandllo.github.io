import { toast } from 'react-toastify'

const buildToastConfiguration = {
	position: 'top-center',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	process: undefined,
	theme: 'colored'
}

const toastMessages = {
	warn(message) {
		return toast.warn(message, buildToastConfiguration)
	}
}

export default toastMessages