// import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
// import React, { useState } from "react";
// import CheckBox from "../components/CheckBox";
// import axios from "axios";

// const Scheme = () => {
//   const [aadhar, setAadhar] = useState(false);
//   const [bpl, setBpl] = useState(false);
//   const [preg, setPreg] = useState(false);
//   const [bp, setBp] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const [data, setData] = useState(null);
//   const [schemes, setSchemes] = useState([]);
//   //   const prompt = `Generate all schemes that i as a ins=dian citizen having ${
//   //     aadhar && "Aadhar"
//   //   } ${bpl && "Income certificate card"} ${preg && "Pregnant woman"} ${
//   //     bp && "business plan"
//   //   }} `;
//   const prompt =
//     "generate schemes that as an indian citizen having" +
//     (aadhar && "aadhar card") +
//     " " +
//     (bpl && "Income certificate card") +
//     "and is a" +
//     (preg && "is a pregnant woman") +
//     ",all government schemes i can claim";
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODEyZDgxOWYtNDI4ZS00NDMyLWFkZWMtMTZhMmE1NmYzMGQ4IiwidHlwZSI6ImZyb250X2FwaV90b2tlbiJ9.6xc3EtZR33l724P6gxseDfe1WPeUl7TnbUoc3l2MrBg";
//   const options = {
//     method: "POST",
//     url: "https://api.edenai.run/v2/text/generation",
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//     data: {
//       show_original_response: false,
//       providers: "openai",
//       text: prompt,
//       temperature: 0.2,
//       max_tokens: 250,
//     },
//   };
//   const handlePress = () => {
//     setClicked(true);

//     axios
//       .request(options)
//       .then((response) => {
//         setData(response.data);
//         const schemeList = response.data.openai.generated_text.split("\n");
//         console.log(schemeList);
//         setSchemes(schemeList);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <SafeAreaView>
//       {!clicked ? (
//         <>
//           <Text
//             style={{
//               paddingHorizontal: 20,
//               paddingTop: 20,
//               fontSize: 25,
//               fontWeight: 600,
//             }}
//           >
//             Check whether you are eligible for government schemes
//           </Text>
//           <View style={{ padding: 15, alignItems: "center" }}>
//             <CheckBox
//               title="Do you have aadhar card ?"
//               onPress={() => setAadhar(!aadhar)}
//               isChecked={aadhar}
//             />
//             <CheckBox
//               title="Do you have an income card certificate?"
//               onPress={() => setBpl(!bpl)}
//               isChecked={bpl}
//             />
//             <CheckBox
//               title="Are you a pregnant woman ?"
//               onPress={() => setPreg(!preg)}
//               isChecked={preg}
//             />
//             <CheckBox
//               title="Do you have a business plan ?"
//               onPress={() => setBp(!bp)}
//               isChecked={bp}
//             />
//             <Pressable style={styles.continueButton} onPress={handlePress}>
//               <Text style={styles.continueButtonText}>Continue</Text>
//             </Pressable>
//           </View>
//         </>
//       ) : (
//         <>
//           <View style={styles.container}>
//             <Text style={styles.header}>Government Schemes</Text>
//             {schemes.map((scheme, index) => (
//               <Text key={index} style={styles.schemeItem}>
//                 {scheme}
//               </Text>
//             ))}
//           </View>
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// export default Scheme;

// const styles = StyleSheet.create({
//   continueButton: {
//     backgroundColor: "black",
//     width: 300,
//     height: 60,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 30,
//     marginTop: 60,
//     zIndex: -1,
//   },
//   continueButtonText: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 25,
//     fontFamily: "Poppins",
//   },
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   schemeItem: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
// });
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CheckBox from "../components/CheckBox";
import axios from "axios";

const Scheme = () => {
  const backgroundColors = [
    "#FFE4C4", // bisque
    "#D8BFD8", // thistle
    "#DDA0DD", // plum
    "#E6F0FF", // lavender
    "#AFEEEE", // paleturquoise
    "#FF7F50", // coral
    "#F5FFFA", // mint
    "#FFDAB9", // peach
  ];
  const [aadhar, setAadhar] = useState(false);
  const [bpl, setBpl] = useState(false);
  const [preg, setPreg] = useState(false);
  const [bp, setBp] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const prompt =
    "generate schemes that as an Indian citizen having" +
    (aadhar ? " aadhar card" : "") +
    (bpl ? " Income certificate card" : "") +
    (preg ? " is a pregnant woman" : "") +
    (bp ? " business plan" : "") +
    ", all government schemes I can claim";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODEyZDgxOWYtNDI4ZS00NDMyLWFkZWMtMTZhMmE1NmYzMGQ4IiwidHlwZSI6ImZyb250X2FwaV90b2tlbiJ9.6xc3EtZR33l724P6gxseDfe1WPeUl7TnbUoc3l2MrBg"; // Replace with your actual API key

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: {
      show_original_response: false,
      providers: "openai",
      text: prompt,
      temperature: 0.2,
      max_tokens: 250,
    },
  };

  const handlePress = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data);
      const schemeList = response.data.openai.generated_text
        .split("\n")
        .filter((scheme) => scheme.trim() !== "");
      console.log(schemeList);
      setSchemes(schemeList);
      setClicked(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleForm = () => {};

  return (
    <SafeAreaView>
      {!clicked ? (
        <>
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
          <View style={{ padding: 15, alignItems: "center" }}>
            <CheckBox
              title="Do you have aadhar card ?"
              onPress={() => setAadhar(!aadhar)}
              isChecked={aadhar}
            />
            <CheckBox
              title="Do you have an income card certificate?"
              onPress={() => setBpl(!bpl)}
              isChecked={bpl}
            />
            <CheckBox
              title="Are you a pregnant woman ?"
              onPress={() => setPreg(!preg)}
              isChecked={preg}
            />
            <CheckBox
              title="Do you have a business plan ?"
              onPress={() => setBp(!bp)}
              isChecked={bp}
            />
            <Pressable style={styles.continueButton} onPress={handlePress}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          <ScrollView
            contentContainerStyle={{ alignItems: "center" }}
            style={styles.container}
          >
            <Text style={styles.header}>Government Schemes</Text>
            {schemes.slice(0, 5).map((scheme, index) => (
              <View
                key={index}
                style={[
                  styles.schemeItemContainer,
                  { backgroundColor: backgroundColors[index] },
                ]}
              >
                <Text style={styles.boldText}>{scheme.split(":")[0]}:</Text>
                <Text style={styles.schemeItem}>
                  {scheme.split(":").slice(1).join(":")}
                </Text>
              </View>
            ))}
            <Pressable style={styles.continueButton} onPress={{ handleForm }}>
              <Text style={styles.continueButtonText}>
                Press to create a PMJDY
              </Text>
            </Pressable>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: "black",
    width: 350,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 60,
  },
  continueButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Poppins",
  },
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  schemeItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  schemeItemContainer: {
    marginBottom: 8,
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Scheme;
