import { Checkbox, Menu } from "antd";
import { dataBrands, dataCategories } from "./navigation.interface";
import React from "react";

interface NavigationProps {
  onCategorySelect: (value: string) => void;
  onBrandSelect: (value: string, checked: boolean) => void;
}

//khai bao de dung
const Navigation: React.FC<NavigationProps> = ({
  onCategorySelect,
  onBrandSelect,
}) => {
  return (
    <div className="shadow-xl">
      <Menu style={{ width: 256 }} mode="inline">
        <Menu.ItemGroup key="category-group" title="Danh mục">
          {dataCategories.map((item) => (
            <Menu.Item
              key={item.value}
              onClick={() => onCategorySelect(item.value)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
        <Menu.ItemGroup key="brand-group" title="Thương hiệu">
          {dataBrands.map((item) => (
            <Menu.Item key={item.value}>
              <Checkbox
                onChange={(e) => onBrandSelect(item.value, e.target.checked)}
              >
                {item.label}
              </Checkbox>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};

export default Navigation;
