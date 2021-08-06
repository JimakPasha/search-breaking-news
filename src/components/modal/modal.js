import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ children }) => {
	const [active, setActive] = useState(true);
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className="modal__content" onClick={e => e.stopPropagation()}>
				<p className="modal__text">
					{children}
				</p>
				<button className="modal__button" onClick={() => setActive(false)}>Ok</button>
			</div>
		</div>
	)
}

export default Modal;
