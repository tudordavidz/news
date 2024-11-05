import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type Props = {};

const Page = (props: Props) => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable((previousState) => !previousState);

  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemBtn}>
          <Text style={styles.itemBtnTxt}>About</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={16}
            color={Colors.lightGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBtn}>
          <Text style={styles.itemBtnTxt}>Send Feedback</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={16}
            color={Colors.lightGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBtn}>
          <Text style={styles.itemBtnTxt}>Privacy Policy</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={16}
            color={Colors.lightGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBtn}>
          <Text style={styles.itemBtnTxt}>Term of Use</Text>
          <MaterialIcons
            name="arrow-forward-ios"
            size={16}
            color={Colors.lightGrey}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBtn}>
          <Text style={styles.itemBtnTxt}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#3e3e3e" }}
            thumbColor={isEnable ? "green" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnable}
            style={{
              transform: [{ scale: 0.6 }],
              marginBottom: -15,
              marginRight: -10,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemBtn}>
          <Text style={(styles.itemBtnTxt, { color: "red" })}>Logout</Text>
          <MaterialIcons name="logout" size={16} color={"red"} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: Colors.background,
    borderBottomWidth: 1,
  },
  itemBtnTxt: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});
