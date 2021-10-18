import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/actions';
import './modalForm.scss';

const ModalForm = ({ children }) => {
	const dispatch = useDispatch();
	const ref = useRef();

	useEffect(() => {
		ref.current.focus();
	}, []);

	const handleClick = (e) => {
		if (e.target.className === 'modal') {
			dispatch(closeModal());
		}
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 27 || e.keyCode === 13) {
			dispatch(closeModal());
		}
	};

	return (
		<div
			className="modal"
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
		>
			<div className="modal__content">
				<p className="modal__text">{children}</p>
				<button
					className="modal__button"
					type="button"
					onClick={() => dispatch(closeModal())}
					ref={ref}
				>
					Ok
				</button>
			</div>
		</div>
	);
};

export default ModalForm;
