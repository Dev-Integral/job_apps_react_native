import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeType, setActiveType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchTerm}
            style={styles.searchInput}
            placeholder="What are you looking for?"
            onChangeText={(text) => {setSearchTerm(text)}}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeType, item)}
              onPress={() => {
                setActiveType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
