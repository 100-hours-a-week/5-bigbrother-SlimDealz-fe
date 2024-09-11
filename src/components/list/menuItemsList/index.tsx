import React, { useEffect, useRef, useState } from 'react';
import { MenuItemsContainerWrapper, MenuItem } from './styles';

type MenuItemsContainerProps = {
  menuItems: { src: string; alt: string; label: string }[];
};

const MenuItemsContainer: React.FC<MenuItemsContainerProps> = ({
  menuItems
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        const stickyPoint = menuRef.current.offsetTop; // 메뉴의 상단 위치
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

  return (
    <div ref={menuRef}>
      <MenuItemsContainerWrapper className={isSticky ? 'fixed' : ''}>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <img src={item.src} alt={item.alt} />
            {item.label}
          </MenuItem>
        ))}
      </MenuItemsContainerWrapper>
    </div>
  );
};

export default MenuItemsContainer;
