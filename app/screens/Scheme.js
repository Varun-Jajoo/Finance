import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CheckBox from "../components/CheckBox";

const Scheme = () => {
  const [aadhar, setAadhar] = useState(false);
  const [bpl, setBpl] = useState(false);
  return (
    <SafeAreaView>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          fontSize: 25,
          fontWeight: 600,
        }}
      >
        Check whether you are eligible for government schemes
      </Text>
      <View style={{ padding: 15 }}>
        <CheckBox
          title="Do you have aadhar card ?"
          onPress={() => setAadhar(!aadhar)}
          isChecked={aadhar}
        />
        <CheckBox
          title="Do you have an income card certificate ?"
          onPress={() => setAadhar(!aadhar)}
          isChecked={aadhar}
        />
        <CheckBox
          title="Do you have aadhar card ?"
          onPress={() => setAadhar(!aadhar)}
          isChecked={aadhar}
        />
      </View>
    </SafeAreaView>
  );
};

export default Scheme;

const styles = StyleSheet.create({});
