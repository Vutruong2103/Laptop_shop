import { Breadcrumb, Select } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Navigation from "../../components/navigations";
import { IProduct } from "../../components/home-type-products/homeTypeProducts.interface";
import { products } from "../../components/home-type-products/fakeData";
import ProductCard from "../../components/hot-products/productCard";
import Brand from "../../components/brand";

const Product = () => {
  const items = [
    {
      href: "/",
      title: <HomeOutlined />,
    },
    {
      title: "Sản phẩm",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);

  // Xử lý lọc sản phẩm mỗi khi thay đổi category hoặc brand
  useEffect(() => {
    let result = products;
    if (selectedCategory) {
      result = result.filter((item) => item.category === selectedCategory);
    }
    if (selectedCategory === "all" || selectedCategory === null) {
      result = products;
    }
    setFilteredProducts(result);
  }, [selectedCategory, selectedBrands]);

  // Hàm chọn danh mục
  const handleCategorySelect = (value: string) => {
    console.log("value: ", value);
    setSelectedCategory(value);
  };

  // Hàm chọn thương hiệu (checkbox)
  const handleBrandSelect = (brand: string, checked: boolean) => {
    console.log("check thương hiệu: ", brand);
    console.log("checkbox: ", checked);
  };
  return (
    <div>
      <Breadcrumb items={items} />
      <div>
        <div>
          <p className="text-xl font-bold mt-4 mb-2">Laptop</p>
          <p>Tìm kiếm và mua sắm laptop phù hợp với nhu cầu của bạn</p>
        </div>
        <div className="flex mt-5">
          <div className="flex gap-6">
            <Navigation
              onCategorySelect={handleCategorySelect}
              onBrandSelect={handleBrandSelect}
            />
            <div>
              <div className="border p-2.5 rounded-lg mb-4 shadow-md">
                Sắp xếp theo:
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="label"
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} item={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
