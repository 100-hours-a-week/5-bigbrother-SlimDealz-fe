import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import TabsComponent from '../../components/tab';
import ImageView from '../../components/image/productImage';
import ProductInfo from '../../components/product/productInfo';
import { InfoContainer } from '../../components/list/categoryList/styles';
import { LoadingProduct } from '@/components/loading';
const DetailPage = () => {
    const { productName } = useParams();
    const [productData, setProductData] = useState(null);
    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`/api/v1/product-detail?productName=${encodeURIComponent(productName)}`);
                setProductData(response.data);
            }
            catch (err) {
                if (err.response) {
                    if (err.response.status === 404) {
                        console.log('Product not found');
                    }
                    else {
                        console.log('Server error');
                    }
                }
                else {
                    console.log('Network error');
                }
            }
        };
        fetchProductData();
    }, [productName]);
    if (!productData) {
        return _jsx(LoadingProduct, {});
    }
    const { imageUrl, name, prices } = productData;
    const { setPrice } = prices[0];
    return (_jsxs(Container, { children: [_jsx(ImageView, { src: imageUrl, alt: name }), _jsx(InfoContainer, { children: _jsx("div", { style: { fontSize: '20px', fontWeight: 'bold', width: '300px' }, children: name }) }), _jsx(ProductInfo, { originalPrice: setPrice, productName: name }), _jsx(TabsComponent, { productName: name })] }));
};
export default DetailPage;
