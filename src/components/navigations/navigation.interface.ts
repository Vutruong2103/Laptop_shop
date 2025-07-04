export const dataCategories: Categories[] = [
  { id: 1, label: "Tất cả", value: "all" },
  { id: 2, label: "Gaming", value: "gaming" },
  { id: 3, label: "Văn phòng", value: "office" },
  { id: 4, label: "Đồ họa", value: "design" },
  { id: 5, label: "Sinh viên", value: "student" },
];

export const dataBrands: Brands[] = [
  { id: 1, label: "Dell", value: "dell" },
  { id: 2, label: "HP", value: "hp" },
  { id: 3, label: "Lenovo", value: "lenovo" },
  { id: 4, label: "Asus", value: "asus" },
  { id: 5, label: "Acer", value: "acer" },
  { id: 6, label: "MSI", value: "msi" },
  { id: 7, label: "Apple", value: "apple" },
  { id: 8, label: "Gigabyte", value: "gigabyte" },
];

export interface Categories {
  id: string | number;
  label: string;
  value: string;
}
export interface Brands {
  id: string | number;
  label: string;
  value: string;
}
