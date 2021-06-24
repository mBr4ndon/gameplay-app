import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { FlatList } from "react-native";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { Background } from '../../components/Background';

export function Home() {
  
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1', 
      guild: {
        id: '1', 
        name: 'Elo Hell Warriors',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/07 às 20h40',
      description: 'Vamos feedar que nem dejenerados até chegar ao Iron IV'
    },
    {
      id: '2', 
      guild: {
        id: '1', 
        name: 'Elo Hell Warriors',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/07 às 20h40',
      description: 'Vamos feedar que nem dejenerados até chegar ao Iron IV'
    }
  ]

  function handleSelectedCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleSelectedCategory}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item}/>
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}