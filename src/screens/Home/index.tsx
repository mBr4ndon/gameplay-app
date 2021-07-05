import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { FlatList } from "react-native";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { Background } from '../../components/Background';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { Load } from "../../components/Load";

export function Home() {
  
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  function handleSelectedCategory(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected : AppointmentProps) {
    navigation.navigate('AppointmentDetails', {guildSelected});
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function fetchAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const response: AppointmentProps[] = storage ? JSON.parse(storage) : [];

    if (category) {
      setAppointments(response.filter(item => item.category === category));
    } else {
      setAppointments(response);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    fetchAppointments();
  }, [category]));

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleSelectedCategory}
      />


      { 
        loading ? <Load /> : 
        <>
          <ListHeader 
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />  
          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{paddingBottom: 69}}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      }
    </Background>
  );
}