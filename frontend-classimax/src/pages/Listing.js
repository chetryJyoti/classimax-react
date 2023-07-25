import React from "react";
import Navbarheader from "../components/Navbar/Navbarheader";
import SearchBar from "../components/SearchArea/SearchBar";
import Card from "../components/Card";
import about from "../assets/about/about.jpg";
import CategoryItem from "../components/CategoryArea/CategoryItem";
const cardData = [
  {
    value: about,
    name: "11inch Macbook Air",
    category: "Electronics",
    date: "26th December",
    rating: "3",
  },
  {
    value: about,
    name: "Full Study Table Combo",
    category: "Furnitures",
    date: "28th December",
    rating: "5",
  },
  {
    value: about,
    name: "Gaming Mouse",
    category: "Electronics",
    date: "29th December",
    rating: "3",
  },
  {
    value: about,
    name: "Leather Sofa Set",
    category: "Furnitures",
    date: "30th December",
    rating: "4",
  },
];
const categoryItems = [
  {
    iconClass: "",
    title: "Category 1",
    items: [
      { name: "Item 1", count: 10 },
      { name: "Item 2", count: 5 },
    ],
    background: "#FF5733",
  },
  {
    iconClass: "",
    title: "Category 2",
    items: [
      { name: "Item 3", count: 15 },
      { name: "Item 4", count: 20 },
    ],
  },
];
const Listing = () => {
  return (
    <div>
      <Navbarheader />
      <SearchBar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding:"20px",
          marginTop:'40px',
          gap:'40px'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            gap:'16px',
            border:'2px solid red'
          }}
        >
          {categoryItems.map((category, index) => (
            <div>
              <CategoryItem
                style={{ padding: "0" }}
                key={index}
                iconClass={category?.iconClass}
                title={category.title}
                items={category.items}
                background={category?.background}
                boxShadow={category?.boxShadow}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {cardData.map((option) => (
            <div style={{ width: "290px" }}>
              <Card option={option} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
