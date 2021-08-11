import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ children }) => {
	const [active, setActive] = useState(true);

	const handleClick = (e) => {
		if (e.target.className === 'modal active') {
			setActive(false);
		}
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 27 || e.keyCode === 13) {
			setActive(false);
		}
	};

	return (
		<div
			className={active ? 'modal active' : 'modal'}
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
					onClick={() => setActive(false)}
				>
					Ok
				</button>
			</div>
		</div>
	);
};

export default Modal;
