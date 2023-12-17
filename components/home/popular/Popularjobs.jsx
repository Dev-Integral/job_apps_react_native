import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { router, useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import styles from "./popularjobs.style";
import Popularjobscards from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item)=>{
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item?.job_id);
  }
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
            data={data}
            renderItem={({ item }) => (
              <Popularjobscards
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
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
