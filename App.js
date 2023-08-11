import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Adega dos Monstro
      </Text>
      <ScrollView>

      <View style={styles.cxfoto}>
      <Image style={styles.img} resizeMode="center" source={require("./assets/redbull1.jpg")} />
      <Text style={styles.subtitulo}> RedBull</Text>
      <Text style={styles.descricao}> A fórmula do Red Bull energy drink contém ingredientes da mais alta qualidade: cafeína, taurina, vitaminas do grupo b, açúcares, água das fontes alpinas </Text>
      <Text style={styles.valor}>R$ 29,96 (4 Latas){('\n')}(R$7,49 / Unidade)</Text>
      </View>

      <View style={styles.cxfoto}>
      <Image style={styles.img}resizeMode="center" source={require("./assets/fusionloud2.jpg")}/>
      <Text style={styles.subtitulo}>Fusion Loud</Text>
      <Text style={styles.descricao}>Energetico, 64% reduzido em açúcares em relação à média do mercado</Text>
      <Text style={styles.valor}>R$ 6,99</Text>
      </View>

      <View style={styles.cxfoto}>
      <Image style={styles.img}resizeMode="center" source={require("./assets/monster6.jpg")}/>
      <Text style={styles.subtitulo}>Monster</Text>
      <Text style={styles.descricao}>O energético mais irado do planeta{('\n')}É um mega golpe que entrega duas vezes o punch de uma bebida energética regular</Text>
      <Text style={styles.valor}>R$ 8,56</Text>
      </View>

      <View style={styles.cxfoto}>
      <Image style={styles.img}resizeMode="center" source={require("./assets/balyenergy10.jpg")}/>
      <Text style={styles.subtitulo}>Baly Energy Drink</Text>
      <Text style={styles.descricao}>Energetico com menos açucar para crianças</Text>
      <Text style={styles.valor}>R$ 9,25</Text>
      </View>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9FB8BE',
    padding: 8,
  },
  paragraph: {
    marginTop: 20,
    marginBottom: 6,
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'#ffff',
  },

  subtitulo:{
    fontSize:20,
    padding: 10,
    backgroundColor: '#5AF153',
    borderRadius: 20,
    margin: 10,
  },

  descricao:{
    padding: 14,
    margin: 3,
  },

  valor:{
    padding: 10,
    borderRadius: 20,
    margin: 10,
    backgroundColor: '#42EDB1',
    fontSize: 18,
  },

  img:{
    width: 230,
    height: 200,
    borderRadius: 2,
    padding: 10,
  },

  cxfoto:{
    flex:1,
    paddingTop: 10,
    margin: 10,
    backgroundColor: '#E8EDEE' ,
    alignItems:'center',
    borderRadius: 15,
    width: 360,
  }  
});