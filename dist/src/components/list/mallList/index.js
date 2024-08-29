import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, MallItem, MallInfo, PriceContainer, ShippingFeeContainer, ShowMoreButton } from './styles';
import { getNumberWithComma } from '@/components/utils/conversion';
import { LoadingProduct } from '@/components/loading';
const MallList = ({ productName }) => {
    const [mallData, setMallData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        const fetchMallData = async () => {
            try {
                const response = await axios.get('/api/v1/vendor-list', {
                    params: { productName }
                });
                setMallData(response.data);
            }
            catch (err) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다.', err);
            }
            finally {
                setLoading(false);
            }
        };
        fetchMallData();
    }, [productName]);
    if (loading)
        return _jsx(LoadingProduct, {});
    const visibleData = showMore ? mallData : mallData.slice(0, 5);
    return (_jsxs(Container, { children: [visibleData.map((item, index) => item.prices.map((price, idx) => (_jsxs(MallItem, { onClick: () => {
                    if (price.vendor.vendorUrl) {
                        window.open(price.vendor.vendorUrl, '_blank');
                    }
                }, children: [_jsx(MallInfo, { children: price.vendor.vendorName }), _jsxs(PriceContainer, { children: [`최저가 ${getNumberWithComma(price.setPrice)}원`, _jsx(ShippingFeeContainer, { children: item.shippingFee
                                    ? `배송비: ${getNumberWithComma(item.shippingFee)}원`
                                    : '무료배송' })] })] }, `${index}-${idx}`)))), mallData.length > 5 && (_jsx(ShowMoreButton, { onClick: () => setShowMore(!showMore), children: showMore ? '접기' : '더보기' }))] }));
};
export default MallList;
