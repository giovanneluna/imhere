import { View,Text, TouchableOpacity} from 'react-native'
import { styles } from './styles';
type Props = {
  name:string;
  //Para tipar uma função
  onRemove: ()=> void;
  //Ela não retorna nada pois tem um retorno vazio
}

export function Participant({name, onRemove}:Props) {
  return(
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>

  )
}