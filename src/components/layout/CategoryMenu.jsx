import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const CategoryMenu = () => {
  const { category } = useParams();
  const [activeItem, setActiveItem] = useState(category);
  const menuItems = [
    'Science',
    'Aliens',
    'Illuminati',
    'Politics',
    'Covid',
    'Hollywood',
  ];

  const renderMenuItems = () => {
    return menuItems.map((item) => {
      return (
        <Menu.Item
          key={item}
          onClick={() => {
            setActiveItem(item);
          }}
          style={{ color: 'white' }}
          data-cy='category-button'
          name={item}
          active={activeItem === item}
          as={Link}
          to={`/category/${item}`}
        />
      );
    });
  };

  return (
    <Segment inverted data-cy='category-bar'>
      <Menu
        style={{
          display: 'flex',
          justifyContent: 'center',
          color: 'rgba(252, 251, 250, 1)',
        }}
        inverted
        secondary>
        {renderMenuItems()}
      </Menu>
    </Segment>
  );
};

export default CategoryMenu;
