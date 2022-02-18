import React from 'react'
import './ModalProduct.scss'
const ModalProduct = ({data, active, handleHiden}) => {
    return (
        <>
            <div className={`overlay ${active ? 'active' : ''}`}
                onClick={handleHiden}></div>
            <div className={`modal-product ${active ? 'active' : ''}`}>
                <div className="modal-product--info">
                    <div className="modal-product--left">
                        <img src={data.image} className="modal-product--image" alt="" />
                    </div>
                    <div className="modal-product--right">
                        <h3 className="modal-product--name">
                            {data.name}
                        </h3>
                        <span className="modal-product--price">{data.price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProduct