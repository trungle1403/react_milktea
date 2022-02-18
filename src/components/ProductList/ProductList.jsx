import React, {useEffect, useState} from 'react'
import list_tea from '../../assets/api/list_tea'
import category from '../../assets/api/category'
import './ProductList.scss'
import ModalProduct from '../ModalProduct/ModalProduct'
const ProductList = () => {

    const initListTea = list_tea.getAllProduct()
    const [listTea, setListTea] = useState(initListTea)
    const [categoryFilter, setCategoryFilter] = useState("")

    
    useEffect(() => {
        if(categoryFilter === '') return
        if(categoryFilter !== 'all')
            setListTea(list_tea.getProductByCategory(categoryFilter))
        else 
            setListTea(initListTea)
    }, [categoryFilter,initListTea])
    
    const [activeCategory, setActiveCategory] = useState(0)
    const handleCaterogyClick = (slug,name) => {
        setCategoryFilter(slug)
        setActiveCategory(category.findIndex(e => e.name === name))
    }

    //show modal
    const [modal, setModal] =  useState('')
    const resetModal = () => {
        modal !== 'active' ? setModal('active') : setModal('')
    }
    const [itemShow, setItemShow] = useState({})
    const handleShow = (item) => {
        resetModal()
        setItemShow(item)
    }
    const handleHiden = () =>{
        resetModal()
    }
    return (
    <div class='product'>
        <div className="product-category">
            {
                category.map((item,index) => (
                    <div className={`product-category--item ${activeCategory === index ? 'active' : ''}`} key={index} onClick={()=>handleCaterogyClick(item.categorySlug,item.name)}>
                        {item.name}
                    </div>
                ) )
            }
        </div>
        <div className="product-list">
            {
                listTea.map((item,index) => (
                    <div key={index} onClick={() => handleShow(item)} className="product-item">
                        <div className="product-media">
                            <img src={item.image} alt="" className="product-image" />
                        </div>
                        <h3 className="product-name">{item.name}</h3>
                        <div className="product-more">
                            <div className="product-price">{item.price}</div>
                            <i class='bx bx-shopping-bag'></i>
                        </div>
                    </div>
                ))
            }
        </div>
        <ModalProduct active={modal} data={itemShow} handleHiden={handleHiden}/>
    </div>
    )
}

export default ProductList