import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native'; 



const CreateAccountScreen = () => {

const navigation = useNavigation();
const handleLoginPress = () => {
    navigation.navigate('LoginScreen');};
  
    const { control, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const onSubmit = (data) => {
    setIsSubmitting(true); // Simulate form submission in progress
    console.log('Form data:', data);
    // Replace with your actual form submission logic (e.g., API call)
    setIsSubmitting(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Registrate!</Text>
        <Button title="Login" onPress={handleLoginPress}/>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        <Controller
          control={control}
          rules={{ required: true }}
          defaultValue=""
          name="cedula"
          render={({ field: { value, onChange, onBlur } }) => (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <MaterialCommunityIcons name="account-circle" size={24} color="black" />
              <Text style={{ marginLeft: 10 }}>Cédula</Text>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Ingrese su cédula"
                style={{ flex: 1, marginLeft: 10 }}
              />
              {errors.cedula && <Text style={{ color: 'red' }}>Cédula requerida</Text>}
            </View>
          )}
        />
        <Controller
          control={control}
          rules={{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }} // Email validation
          defaultValue=""
          name="email"
          render={({ field: { value, onChange, onBlur } }) => (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <MaterialCommunityIcons name="email" size={24} color="black" />
              <Text style={{ marginLeft: 10 }}>Correo Electrónico</Text>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Ingrese su correo electrónico"
                style={{ flex: 1, marginLeft: 10 }}
              />
              {errors.email && (
                <Text style={{ color: 'red' }}>Correo electrónico inválido</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          defaultValue=""
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <MaterialCommunityIcons name="key" size={24} color="black" />
              <Text style={{ marginLeft: 10 }}>Contraseña</Text>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Ingrese su contraseña"
                secureTextEntry={true} // Hide password
                style={{ flex: 1, marginLeft: 10 }}
              />
              {errors.password && <Text style={{ color: 'red' }}>Contraseña requerida</Text>}
            </View>
          )}
        />
        <Button
          title="Regístrate"
          disabled={isSubmitting || errors.cedula || errors.email || errors.password} // Disable if submitting or errors
          onPress={handleSubmit(onSubmit)}
        />
        <Button title="Olvidaste tu contraseña?" onPress={() => { /* Handle button press */} } />
      </View>
    </View>
  );
};

export default CreateAccountScreen;
