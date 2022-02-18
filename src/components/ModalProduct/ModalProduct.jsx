import React from 'react'
import ice from '../../assets/api/ice'
import topping from '../../assets/api/topping'

import './ModalProduct.scss'
const ModalProduct = ({data, active, handleHiden}) => {
    console.log(data === null)
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
                        <span className="modal-product--price">{data.price}vnd</span>
                        <div className="flex aic">
                            <div className="modal-product--quanlity">
                                <i className='bx bx-minus-circle'></i>
                                <input type="text" className="modal-product--quanlity__amount" />
                                <i className='bx bx-plus-circle'></i>
                            </div>
                            <div className="modal-product--btn-price">+ {data.price}</div>
                        </div>
                    </div>
                </div>
                <div className="modal-product--topping">
                    <div className="flex jcb">
                        <span>Chon loai</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <div className="modal-product--content">
                        {
                            data.size.map((item,index) => (
                                <div key={index} className="modal-product--content--radio">
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex jcb">
                        <span>Chon duong</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <div className="modal-product--content">
                        {
                            ice.map((item,index) => (
                                <div key={index} className="modal-product--content--radio">
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex jcb">
                        <span>Chon topping</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <div className="modal-product--content">
                        {
                            topping.map((item,index) => (
                                <div key={index} className="modal-product--content--radio flex aic">
                                    <span className='custom-radio'></span>
                                    <input type="radio" name="radio" id={index} />
                                    <label for={index}>{item.name}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProduct