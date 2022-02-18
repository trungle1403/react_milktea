import product1 from '../images/products/product1.png'
import product2 from '../images/products/product2.png'
import product3 from '../images/products/product3.jpg'
import product4 from '../images/products/product4.jpg'
import product5 from '../images/products/product5.jpg'
import product6 from '../images/products/product6.jpg'
import product7 from '../images/products/product7.jpg'
import product8 from '../images/products/product8.jpg'
import product9 from '../images/products/product9.jpg'
import product10 from '../images/products/product10.jpg'
const products = [
    {
        id: 1,
        name: 'Choco ngũ cốc kem cafe',
        price: "44000",
        size: [
            "M"
        ],
        image: product1,
        categorySlug: 'mon-noi-bat',
        slug: "choco-ngu-coc-kem-cafe"
    },
    {
        id: 2,
        name: 'Hồng trà ngũ cốc kem cafe',
        price: "44000",
        size: [
            "M"
        ],
        image: product2,
        categorySlug: 'hong-tra',
        slug: "hong-tra-ngu-coc-kem-cafe"
    },
    {
        id: 3,
        name: 'Trà sữa trân châu hoàng gia',
        price: "29000",
        size: [
            "M","L"
        ],
        image: product3,
        categorySlug: 'tra-sua',
        slug: 'tra-sua-tran-chau-hoang-gia'
    },
    {
        id: 4,
        name: 'Tiger sugar',
        price: "29000",
        size: [
            "M","L"
        ],
        image: product4,
        categorySlug: 'mon-noi-bat',
        slug: 'tiger-sugar'
    },
    {
        id: 5,
        name: 'Trà sữa kim cương đen okinawa',
        price: "29000",
        size: [
            "M","L"
        ],
        image: product5,
        categorySlug: 'tra-sua',
        slug: 'tra-sua-kim-cuong-den-okinawa'
    },
    {
        id: 6,
        name: 'Trà sữa ô long',
        price: "29000",
        size: [
            "M","L"
        ],
        image: product6,
        categorySlug: 'tra-sua',
        slug: 'tra-sua-o-long'
    },
    {
        id: 7,
        name: 'Trà sữa socola',
        price: "29000",
        size: [
            "M","L"
        ],
        image: product7,
        categorySlug: 'tra-sua',
        slug: 'tra-sua-socola'
    },
    {
        id: 8,
        name: 'Probi bưởi trân châu sương mai',
        price: "29000",
        size: [
            "M"
        ],
        image: product8,
        categorySlug: 'hong-tra',
        slug: 'probi-buoi-tran-chau-suong-mai'
    },
    {
        id: 9,
        name: 'Hồng trà bưởi mật ong',
        price: "29000",
        size: [
            "M"
        ],
        image: product9,
        categorySlug: 'hong-tra',
        slug: 'hong-tra-buoi-mat-ong'
    },
    {
        id: 10,
        name: 'Hồng trà kem phô mai',
        price: "29000",
        size: [
            "M"
        ],
        image: product10,
        categorySlug: ['hong-tra','tra-sua'],
        slug: 'hong-tra-kem-pho-mai'
    },
]
const getAllProduct = () => products
const getProductBySlug = (slug) => products.find(e => e.slug === slug)
const getProductByCategory = (category) => products.filter(e => e.categorySlug === category)

const productData = { getAllProduct, getProductBySlug, getProductByCategory}
export default productData