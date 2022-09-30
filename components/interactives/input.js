import React from 'react';
import { StyleSheet, SafeAreaView, TextInput } from 'react-native';
import s from '../../assets/styles/globalStyles';


export default function Input({text_placeholder, text_keyboardType}) {

    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={text_placeholder}
                keyboardType={text_keyboardType}
            />
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    input:{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: s.borderColor,
        margin: 20,
        height: 42,
        padding: 8
    }
});