import React from "react";
import { close } from "../assets";

const Modal = (props) => {
    const modalState = props.toggle
    const action = props.action
    return (
        <>
            <main className={modalState ? 'active' : 'display'}>
                <section className="modal">
                    <img className="modal-close" onClick={action} src={close} alt="closeBtn" />
                    <div className="modal-list">
                        <nav className="modal-list-1">
                            <p>Products</p>
                            <p>Features</p>
                            <p>About</p>
                            <p>Contact</p>
                        </nav>
                        <div className="modal-list-2">
                            <p className="login">Login</p>
                            <hr className="modal-line" />
                            <p className="register">Register</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Modal;