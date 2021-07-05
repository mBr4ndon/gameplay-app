import React, { useState } from "react";
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

import { styles } from "./styles";

import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { CategorySelect } from "../../components/CategorySelect";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";

import { theme } from "../../global/styles/theme";
import { GuildProps } from "../../components/Guild";
import { Background } from "../../components/Background";
import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { useNavigation } from "@react-navigation/native";


export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelected(guildSelected: GuildProps) {
    setGuild(guildSelected);
    handleCloseGuildsModal();
  }

  function handleSelectedCategory(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}h${minute}`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS, 
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <Background>
        <ScrollView>
          <Header 
            title="Agendar partida"
          />

          <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>

          <CategorySelect 
            hasCheckBox
            setCategory={handleSelectedCategory}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton
              onPress={handleOpenGuildsModal}
            >
              <View style={styles.select}>
                { 
                  guild.name ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> : <View style={styles.image}/>        
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                  {guild.name ? guild.name : 'Seleciona um servidor'}
                  </Text>
                </View>

                <Feather 
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />

              </View>
            </RectButton>
          
            <View style={styles.field}>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>    
                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setDay}
                  />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setMonth}
                  />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>    
                <View style={styles.column}>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setHour}
                  />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput 
                    maxLength={2} 
                    onChangeText={setMinute}
                  />
                </View>
              </View>

            </View>
          
            
            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.textMax}>Máx 100 caracteres</Text>
            </View>

            <TextArea 
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}   
              onChangeText={setDescription}    
            />

            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleSave}/>
            </View>
          </View>


        </ScrollView>

      </Background>
      
      

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelected={handleGuildSelected}/>     
      </ModalView>
    </KeyboardAvoidingView>
  )
}