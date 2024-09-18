import React from "react";

import { View, Text, StyleSheet, SectionList } from "react-native";
// import SectionList from "react-native/Libraries/Lists/SectionList";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  // const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        // renderItem={renderItem}
        renderItem={({ item }) => (
          <View style={menuStyles.container}>
            <Text style={menuStyles.itemText}>{item.name}</Text>
            <Text style={menuStyles.itemPrice}>{item.price}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={menuStyles.headerItem}>{title}</Text>
        )}
      />
    </View>
  );
};

// const MenuItems = () => {
//   const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

//   return (
//     <View style={menuStyles.container}>
//       <FlatList
//         data={menuItemsToDisplay}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       ></FlatList>
//     </View>
//   );
// };

const menuStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    // paddingHorizontal: 15,

    backgroundColor: "#33333",
  },
  itemText: {
    paddingHorizontal: 30,
    color: "#F4CE14",
    fontSize: 20,
  },
  itemPrice: {
    paddingHorizontal: 40,
    color: "#F4CE14",
    fontSize: 20,
  },
  headerItem: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#F4CE14",
    fontWeight: "bold",
  },
});

export default MenuItems;
