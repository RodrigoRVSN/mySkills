import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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
    Keyboard.dismiss();
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id));
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title} testID="hello">
            Hello, Rodrigo
          </Text>
          <Text style={styles.greetings}>{gretting}</Text>
          <TextInput
            testID="input-new"
            style={styles.input}
            placeholder={"Skill "}
            placeholderTextColor="#555"
            onChangeText={(text) => setNewSkill(text)}
            value={newSkill}
          />

          <Button
            testID="button-add"
            onPress={handleNewAddSkill}
            activeOpacity={0.8}
            title={"ADD"}
          />

          <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
          <View style={{ height: 350 }}>
            {mySkills && (
              <FlatList
                testID="flat-list-skills"
                data={mySkills}
                style={{ paddingVertical: 20 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Skillcard
                    skill={item.name}
                    activeOpacity={0.8}
                    onPress={() => handleRemoveSkill(item.id)}
                  />
                )}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}
