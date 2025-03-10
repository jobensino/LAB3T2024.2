import ModalScreen from "@/src/cp/ModalScreen";
import { ThemedText } from "@/src/cp/ThemedText";
import { ThemedView } from "@/src/cp/ThemedView";
import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import * as Crypto from 'expo-crypto';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type RegisterProps = {
    visible :boolean,
    handleClose:()=>void,
}

export function RegisterScreen({visible,handleClose}:RegisterProps) {

    const [email,setEmail] = useState("")
    const [myuuid,setMyuuid] = useState(Crypto.randomUUID())

    const handleClick = () => {
        setMyuuid(Crypto.randomUUID())
    }

return(
    <ModalScreen isVisible={visible} onClose={handleClose} title="Registro de Usuário">
        <ThemedView style={styles.container}>
            <View style={styles.input}>
                <TextInput  value={email}
                            placeholder="Informe e-mail: "
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect={false}                            
                            onChangeText={(text)=>setEmail(text)}/>
            </View>
            <ThemedView style={styles.footer}>
                <ThemedText type='defaultSemiBold'>UUID:</ThemedText>
                <ThemedText type='link'>{myuuid}</ThemedText> 
                    <Pressable onPress={handleClick}>
                        <MaterialIcons name="refresh" color="#fff" size={22} />
                    </Pressable>                   
                
                
            </ThemedView> 
        </ThemedView>      
         
    </ModalScreen>
)

}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'flex-start',
    padding: 10,
    gap :8,
  },
  footer: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    marginBottom: 6,
    padding: 6,
    width:"100%",
  },
});