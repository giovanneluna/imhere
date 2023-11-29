import {TextInput, TouchableOpacity, View ,FlatList, Alert, Text} from "react-native"
import { styles } from "./styles"
import { Participant } from '../components/Participant/index';
import { useState } from "react";

export default function Home() {
  //useState<string[]>([]) estamos dizendo que o valor vai ser uma String
  const [participants,setParticipants] = useState<string[]>([]);
  const [participantName,setParticipantName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante Existe","Já Existe um Parcitipamente na lista com esse nome")
    }
    setParticipants(prevState=>[...prevState,participantName])
    setParticipantName('')
  }
  function handleParticipantRemove(name: string) {    

    return console.log('gika');
    

     Alert.alert("Remover",`Remover o participante ${name}?`,[
      {
        text: 'Sim',
        onPress: ()=> setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text:'Não',
        style:'cancel'
      }
    ])
    
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 28 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={text => setParticipantName(text)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={({item})=>(
        <Participant key={item} name={item} onRemove={()=>handleParticipantRemove(item)} />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <Text style={styles.listEmptyText}>
          Ningúem Chegou no Evento ainda? Adicione participantes na sua lista de Presença!
        </Text>
      )}
      />
    </View>
  )
}
