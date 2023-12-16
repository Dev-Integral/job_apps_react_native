import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../../constants";
import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hooks/useFetch";
import { useRouter } from "expo-router";

const Nearbyjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch("search", {query: "React Developer", num_pages: 1});
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          data?.map((job) => (<NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={()=> router.push(`/job-details/${job?.job_id }`)} />))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
