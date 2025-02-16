import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");

  return (
    <View style={styles.container}>
      {/* Imagem agora está no topo */}
      <Image
        style={styles.imagem}
        resizeMode="stretch"
        source={require('./imagem/imagem01.png')}
      />
      <Text style={styles.display}>CADASTRO DE ALUNOS – Prof. EDIBERTO</Text>
      <Text style={styles.display1}>ENTRADA DE DADOS - TextInput</Text>

      {/* View responsável por alinhar à esquerda os labels e inputs */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Matrícula</Text>
        <TextInput
          style={styles.matriculaInput}
          value={matricula}
          onChangeText={(texto) => setMatricula(texto)}
        />

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.nomeInput}
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        />
      </View>
      <StatusBar style="auto" />
      <ScrollView style = {styles.ScroolView}>
        <Text style = {styles.text}>
          ScrollView é um componente que envolve a plataforma ScroolView enquanto fornece integração com os sistema de toque.
          Lembre-se de que ScroolViews devem ter uma altura limitada para funcionar, pois contén filhos de altura em um
          contêiner limitado limitado (por meio de uma interação de rolagem). .{"\n\n"}
          Para limitar a altura de um ScrollView, defina 
          a altura da exibição diretamente (desencorajado) ou certifique-se de que todas as exibições pai tenham altura limitada. 
          Esquecer de transferir a pilha de exibição pode levar a erros aqui, que o inspetor de elemento depura rapidamente.
          .{"\n\n"}
          ScrollView é um componente que envolve a plataforma ScroolView enquanto fornece integração com os sistema de toque.
          Lembre-se de que ScroolViews devem ter uma altura limitada para funcionar, pois contén filhos de altura em um
          contêiner limitado limitado (por meio de uma interação de rolagem). 
          .{"\n\n"}
          Para limitar a altura de um ScrollView, defina 
          a altura da exibição diretamente (desencorajado) ou certifique-se de que todas as exibições pai tenham altura limitada. 
          Esquecer de transferir a pilha de exibição pode levar a erros aqui, que o inspetor de elemento depura rapidamente.
        </Text>
      </ScrollView>
      {/*BOTÃO ABAIXO DO SCROLLVIEW*/}
      <View style = {styles.buttonContainer}>
          <Button title = "Clique Aqui"
              onPress = {() => 
                alert('Parabéns você conseguiu fazer o exercício da primeira aula')
              }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cab',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagem: {
    width: 200,
    height: 60,
    marginTop: 10,
    marginBottom: 10, // Adiciona um espaço abaixo da imagem
  },
  display: {
    margin: 5,
    fontSize: 20,       // Tamanho maior
    fontWeight: "bold", // Negrito
    color: "blue",      // Cor azul
  },
  display1: {
    margin: 10,
    fontSize: 20,       // Tamanho maior
    fontWeight: "bold", // Negrito
    color: "blue",      // Cor azul
  },
  formContainer: {
    width: "100%",  // Ocupa toda a largura
    alignSelf: "flex-start", // Alinha à esquerda da tela
  },
  label: {
    marginLeft: 40, // Aproxima da borda esquerda
    fontSize: 16,
    fontWeight: "bold",
  },
  matriculaInput: {
    width: "30%",
    backgroundColor: '#FFF',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    marginLeft: 40, // Aproxima da borda esquerda
  },
  nomeInput: {
    width: "90%",
    backgroundColor: '#FFF',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    marginLeft: 40, // Aproxima da borda esquerda
  },
  ScroolView: {
    alignSelf: "flex-start", // Alinha à esquerda da tela
    height: 200,  // Ajuste conforme necessário
    width: "90%",
    backgroundColor: "#EEE",
    marginVertical: 10,
    marginLeft: 40, // Aproxima da borda esquerda
  },
});
