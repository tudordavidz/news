import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import Animated, { SharedValue } from "react-native-reanimated";

type Props = {
  items: NewsDataType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};

const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        return (
          <Animated.View
            style={[
              styles.dot,
              {
                backgroundColor:
                  paginationIndex === index ? Colors.tint : Colors.darkGrey,
              },
            ]}
            key={index}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 2,
    backgroundColor: "#333",
  },
});
