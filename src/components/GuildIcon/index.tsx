import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {

  const uri = 'https://i1.wp.com/getdrawings.com/free-icon/green-discord-icon-60.png';

  return (
    <Image 
      source={{ uri }} 
      style={styles.image}
      resizeMode="cover"
    />
  );
}