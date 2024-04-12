import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Formulario = () => {
  const [titular, setTitular] = useState('');
  const [matricula, setMatricula] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [seguro, setSeguro] = useState('');

  const handleSubmit = () => {
    console.log('Formulario enviado');
  };

  return (
    <View>
      <Text>Nombre del titular (dueño):</Text>
      <TextInput
        placeholder="Nombre del titular"
        value={titular}
        onChangeText={setTitular}
      />
      <Text>Matrícula:</Text>
      <TextInput
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />
      <Text>Marca:</Text>
      <TextInput
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
      />
      <Text>Modelo:</Text>
      <TextInput
        placeholder="Modelo"
        value={modelo}
        onChangeText={setModelo}
      />
      <Text>Año:</Text>
      <TextInput
        placeholder="Año"
        value={ano}
        onChangeText={setAno}
      />
      <Text>Seguro actual:</Text>
      <TextInput
        placeholder="Seguro actual"
        value={seguro}
        onChangeText={setSeguro}
      />
      <Button title="Listo" onPress={handleSubmit} />
    </View>
  );
};

export default Formulario;
