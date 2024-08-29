import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Container, ReviewContainer, PaginationContainer } from './styles';
import { Pagination } from '@mui/material';
const mockReviews = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `제목${i + 1}`,
    content: '내용 라인 1\n내용 라인 2',
    date: '2024.07.21',
    username: `사용자${i + 1}`,
    imgSrc: '/path/to/image.jpg'
}));
const ReviewList = () => {
    const [page, setPage] = useState(1);
    const reviewsPerPage = 3;
    const totalPages = Math.ceil(mockReviews.length / reviewsPerPage);
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const paginatedReviews = mockReviews.slice((page - 1) * reviewsPerPage, page * reviewsPerPage);
    return (_jsxs(Container, { children: [paginatedReviews.map((review) => (_jsxs(ReviewContainer, { children: [_jsx("img", { src: review.imgSrc, alt: "Review" }), _jsxs("div", { children: [_jsx("h3", { children: review.title }), _jsx("p", { children: review.content }), _jsxs("small", { children: [review.date, " | ", review.username] })] })] }, review.id))), _jsx(PaginationContainer, { children: _jsx(Pagination, { count: totalPages, page: page, onChange: handlePageChange, siblingCount: 1, boundaryCount: 1, shape: "rounded", variant: "outlined", color: "primary" }) })] }));
};
export default ReviewList;
