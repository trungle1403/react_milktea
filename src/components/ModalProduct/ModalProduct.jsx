import React, {useState} from 'react'
import ice from '../../assets/api/ice'
import topping from '../../assets/api/topping'
import numberWithCommas from '../../utils/numberWithCommas'

import './ModalProduct.scss'
const ModalProduct = ({data, active, handleHiden}) => {
    const initPrice = Number(data.price)
    const [priceCurrent, setPriceCurrent] = useState(initPrice)
    const [priceSize, setPriceSize] = useState(initPrice)
    const [amount, setAmount] = useState(1)
    // const [iceCurrent, setIceCurrent] = useState('')
        // const ice = document.querySelector('input[name="ice"]:checked').value;
    
    const handleChangeSize = () => {
        const size = document.querySelector('input[name="size"]:checked').value;
        if(size==="L"){
            setPriceCurrent(priceCurrent+6000)
            setPriceSize(35000)
        }else{
            setPriceCurrent(priceCurrent-6000)
            setPriceSize(29000)
        }
    }
    const handleChangeTopping = (idItem, id) => {
        const selector = `#${id}`
        const toppingChecked = document.querySelector(selector)
        topping.forEach(e => {
            if(idItem === Number(e.id)){
                if(toppingChecked.checked) {
                    setPriceCurrent(priceCurrent+Number(e.price))
                }else{
                    setPriceCurrent(priceCurrent-Number(e.price))
                }
            }
        });
    }

    const handleChangeAmount = (symbol) => {
        if(symbol === '+') {
            setAmount(amount+1)
            setPriceCurrent(priceSize*(amount+1))
        }else{
            if(amount >1){
                setAmount(amount-1)
                setPriceCurrent(priceSize*(amount-1))
            }
        }
        
    }

    const handleSubmit = () => {
        
    }
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
                        <span className="modal-product--price">{numberWithCommas(priceSize)}đ</span>
                        <div className="flex aic">  
                            <div className="modal-product--quanlity">
                                <i onClick={() => handleChangeAmount('-')} className='bx bx-minus-circle'></i>
                                <span className="modal-product--quanlity__amount">{amount}</span>
                                <i onClick={() => handleChangeAmount('+')} className='bx bx-plus-circle'></i>
                            </div>
                            <div className="modal-product--btn-price"  
                                onClick={() => handleSubmit()}>+ {numberWithCommas(priceCurrent)}d</div>
                        </div>
                    </div>
                </div>
                <div className="modal-product--topping">
                    <div className="flex jcb">
                        <b>Chọn size</b>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <div className="modal-product--content grid-2-col">
                        {
                            data.size.map((item,index) => (
                                <label for={`size-${index}`} key={index} className="modal-product--content--radio flex aic">
                                    <span>Size {item}</span>
                                    <input className='product-checkbox' value={item} type="radio" name="size" id={`size-${index}`} defaultChecked={index ===0 ? 'checked' : ''} 
                                        onChange={()=> handleChangeSize()}
                                    /> 
                                    <span className='custom-radio'></span>
                                </label>
                            ))
                        }
                    </div>
                    <div className="flex jcb">
                        <b>Chọn đường</b>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <div className="modal-product--content grid-2-col">
                        {
                            ice.map((item,index) => (
                                <label for={`ice-${index}`} key={index} className="modal-product--content--radio flex aic">
                                    <span >{item}</span>
                                    <input className='product-checkbox' value={item} type="radio" name="ice" id={`ice-${index}`} defaultChecked={index ===0 ? 'checked' : ''} /> 
                                    <span className='custom-radio'></span>
                                </label>
                            ))
                        }
                    </div>
                    <div className="flex jcb">
                        <b>Chọn topping</b>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <div className="modal-product--content">
                        {
                            topping.map((item,index) => (
                                <label for={`topping-${index}`} key={index} className="modal-product--content--radio flex aic">
                                    <div className="flex aic jcb wf">
                                        <div>{item.name}</div>
                                        <div>+ {numberWithCommas(item.price)}đ</div>
                                    </div>
                                    <input className='product-checkbox' value={item.id} type="checkbox" name="topping" id={`topping-${index}`}  
                                    onChange={()=> handleChangeTopping(item.id, 'topping-'+index) }/>
                                    <span className='custom-radio'></span>
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProduct