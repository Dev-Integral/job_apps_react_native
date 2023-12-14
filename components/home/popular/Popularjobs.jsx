import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import styles from "./popularjobs.style";
import Popularjobscards from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const isLoading = false;
  const router = useRouter();
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3]}
            renderItem={({ item }) => <Popularjobscards item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
