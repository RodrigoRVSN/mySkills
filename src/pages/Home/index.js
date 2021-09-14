import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../components/Button";
import { Skillcard } from "../../components/Skillcard";
import { styles } from "./styles";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  function handleNewAddSkill() {
    if (newSkill.length > 0) {
      setMySkills((oldState) => [...oldState, newSkill]);
      setNewSkill("");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, Rodrigo</Text>
        <TextInput
          style={styles.input}
          placeholder={"Rodrigo"}
          placeholderTextColor="#555"
          onChangeText={(text) => setNewSkill(text)}
          value={newSkill}
        />

        <Button handleNewAddSkill={handleNewAddSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Skillcard skill={item} />}
        />
      </View>
    </>
  );
}
