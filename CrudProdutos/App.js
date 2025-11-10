import { FlatList, View, StyleSheet, Image } from "react-native"
import { Card, Title, Paragraph } from "react-native-paper"

export default function App() {

  const produtos = [
    {
      id: 1,
      nome: 'Mouse Gamer XING LING',
      preco: 'R$ 25,00',
      descricao: 'Mouse com sensor óptico de alta precisão',
      imagem: '',
    },
    {
      id: 2,
      nome: 'Teclado Mecanico',
      preco: 'R$ 200,00',
      descricao: 'Teclado top com iluminação LED',
      imagem: '',
    },
    {
      id: 3,
      nome: 'Camera Tech pix',
      preco: 'R$ 350,00',
      descricao: 'Camera top de última geração',
      imagem: '',
    },
    {
      id: 4,
      nome: 'Super Nintendo',
      preco: 'R$ 1000,00',
      descricao: 'Video-game de última geração',
      imagem: '',
    }
  ]

  const renderItem = ({ item }) => {
    <Card>
      <Card.Cover source={{uri: item.imagem}} />
      <Card.Content>
        <Title>{item.nome}</Title>
        <Paragraph>{item.descricao}</Paragraph>
        <Paragraph>{item.preco}</Paragraph>
      </Card.Content>
    </Card>
  }

  return(
    <View>
      <FlatList 
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem} 
      />
    </View>
  )
}