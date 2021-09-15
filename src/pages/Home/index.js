import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { Skillcard } from "../../components/Skillcard";
import { styles } from "./styles";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState("");

  function handleNewAddSkill() {
    if (newSkill.length > 0) {
      setMySkills((oldState) => [...oldState, newSkill]);
      setNewSkill("");
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, Rodrigo</Text>
        <Text style={styles.greetings}>{greeting}</Text>
        <TextInput
          style={styles.input}
          placeholder={"Skill "}
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
