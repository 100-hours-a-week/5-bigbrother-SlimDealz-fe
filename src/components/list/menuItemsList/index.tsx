import React, { useEffect, useRef, useState } from 'react';
import { MenuItemsContainerWrapper, MenuItem } from './styles';
import PagePreparationModal from '@/components/modal/pagePreparationModal';

const menuItems = [
  { src: '/assets/icons/chicken.png', alt: 'chicken', label: '닭가슴살' },
  { src: '/assets/icons/protein.png', alt: 'protein', label: '프로틴' },
  { src: '/assets/icons/salad.png', alt: 'salad', label: '샐러드' }
];

const MenuItemsContainer = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const stickyPoint = menuRef.current.offsetTop;
        if (window.scrollY > stickyPoint) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (label: string) => {
    if (label === '프로틴' || label === '샐러드') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div ref={menuRef}>
      <MenuItemsContainerWrapper className={isSticky ? 'fixed' : ''}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleItemClick(item.label)}>
            <img src={item.src} alt={item.alt} />
            {item.label}
          </MenuItem>
        ))}
      </MenuItemsContainerWrapper>

      {isModalOpen && <PagePreparationModal onClose={closeModal} />}
    </div>
  );
};

export default MenuItemsContainer;
