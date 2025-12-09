import React from 'react'
import "./Error.scss";

function Error({ errMessage }) {
    return (
        <div className="error">
            <h1 className="error__emoji">😕</h1>
            <h2 className="error__title">{errMessage.title}</h2>
            <p className="error__message">
                {errMessage.message} {errMessage.resolution}
            </p>
        </div>
    );
}
export default Error;