import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import ListCard from "../common/ListCard";
import { AddOrchidToFavorite } from "../functions/AddOrchidToFavorite";
import { Dropdown } from "react-native-element-dropdown";
import { CommonStyles } from "../styles/CommonStyles";

const OrchidsList = () => {
  const route = useRoute();
  const { orchidsList } = route.params;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique categories from the orchidsList
    let uniqueCategories =  Array.from(
      new Set(orchidsList.map((orchid) => orchid.category))
    );

    uniqueCategories.push("Tất cả");

    // Set the categories for the dropdown
    setCategories(
      uniqueCategories.map((category) => ({
        value: category,
        label: category,
      }))
    );
  }, [orchidsList]);

  // Filter the orchids based on the selected category
  const filteredOrchids = orchidsList.filter(
    (orchid) => orchid.category === selectedCategory
  );

  const handleFilter = (item) => {
    setSelectedCategory(item.value);
  };

  return (
    <View style={CommonStyles.container}>
      {/* Dropdown button to choose category */}
      <Dropdown
        label="Lọc theo Loại"
        data={categories}
        value={selectedCategory}
        labelField="label"
        valueField="value"
        onChange={handleFilter}
      />
      {/* <Text>Lan thuộc loại {selectedCategory}:</Text> */}
      <ScrollView>
        <View style={{ padding: 20 }}>
          {/* Vertical Scrolling area with many <ListCard></ListCard>*/}
          {(selectedCategory === "Tất cả" ? orchidsList : filteredOrchids).map((orchid, i) => (
            <ListCard
              key={i}
              orchid={orchid}
              showDeleteBtn={false}
              addFavorite={AddOrchidToFavorite}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrchidsList;
