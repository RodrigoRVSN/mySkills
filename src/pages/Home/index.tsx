import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { Button } from "../../components/Button";
import { Skillcard } from "../../components/Skillcard";
import { styles } from "./styles";

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState("");

  function handleNewAddSkill() {
    if (newSkill.length > 0) {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill,
      };
      setMySkills((oldState) => [...oldState, data]);
      setNewSkill("");
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting("Good Afternoon");
    } else {
      setGretting("Good Evening");
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, Rodrigo</Text>
        <Text style={styles.greetings}>{gretting}</Text>
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Skillcard skill={item.name} />}
        />
      </View>
    </>
  );
}
