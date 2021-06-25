import React, { useState } from "react";
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from "./styles";

import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { CategorySelect } from "../../components/CategorySelect";

import { theme } from "../../global/styles/theme";


export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header 
        title="Agendar partida"
      />

      <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>Categoria</Text>

      <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            { 
              //  <View style={styles.image}/>
               <GuildIcon />         
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecina um servidor
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
            <Text style={styles.label}>Dia e mês</Text>    
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>/</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Hora e minuto</Text>    
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>:</Text>
              <SmallInput maxLength={2} />
            </View>
          </View>

        </View>
      </View>


    </Background>
  )
}