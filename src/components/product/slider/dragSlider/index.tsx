import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard, Container, Slider } from './styles';
import { truncateString } from '@/components/utils/conversion';
import { LoadingSearch } from '@/components/loading';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  prices: { setPrice: number }[];
};

interface Props {
  products: Product[];
}

const DragSlider = ({ products }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const navigate = useNavigate();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollStart.current = containerRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const dragDistance = e.pageX - startX.current;
    const movementFactor = 1.5;
    const newScrollPosition =
      scrollStart.current - dragDistance * movementFactor;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    animationFrame.current = requestAnimationFrame(() => {
      containerRef.current!.scrollLeft = newScrollPosition;
    });
  };

  const stopDragging = () => {
    isDragging.current = false;
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  };

  const handleProductClick = (productName: string) => {
    navigate(`/product/${productName}`);
  };

  useEffect(() => {
    const handleMouseUp = () => stopDragging();

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleMouseMove(e);
      }
    };

    window.addEventListener(
      'mousemove',
      handleGlobalMouseMove as EventListener
    );
    window.addEventListener('mouseup', handleMouseUp as EventListener);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleGlobalMouseMove as EventListener
      );
      window.removeEventListener('mouseup', handleMouseUp as EventListener);
    };
  }, []);

  return (
    <Container>
      {products.length > 0 ? (
        <Slider ref={containerRef} onMouseDown={handleMouseDown}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              onClick={() => handleProductClick(product.name)}
            >
              <img src={product.imageUrl} alt={product.name} />
              <h3>{truncateString(product.name, 15)}</h3>
              <p>{product.prices?.[0]?.setPrice?.toLocaleString()}원</p>
            </ProductCard>
          ))}
        </Slider>
      ) : (
        <LoadingSearch />
      )}
    </Container>
  );
};

export default DragSlider;
