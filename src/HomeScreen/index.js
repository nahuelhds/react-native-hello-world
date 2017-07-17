import React, {Component} from 'react';

import {
  Button,
  Container,
  Content,
  Text,
  Thumbnail,
  View
} from 'native-base';

import {styles, css} from './styles';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={css(styles.fullScreen)}>
            <View style={css(styles.header)}>
              <Thumbnail style={css(styles.avatar)} large source={{
                uri: 'http://gravatar.com/avatar/41b64c5cb658355a506deba471262427'
              }}/>
            </View>
            <View style={css([styles.content])} padder>
              <Text style={css(styles.subtitle)}>The Hello World App</Text>
              <Text style={css(styles.title)}>nahuelhds</Text>
              <View style={css(styles.textContainer)}>
                <View style={css(styles.leadBlock)}>
                  <Text style={css([styles.lead, styles.textCenter])}>
                    Agile developer & Craftperson
                  </Text>
                  <Text style={css([styles.lead, styles.textCenter])}>
                    @ CristalMedia
                  </Text>
                </View>
                <View style={css([styles.valign])}>
                  <Text style={css([styles.textCenter, styles.small])}>Esta aplicación fue creada para conocer y aprender sobre React Native.</Text>
                </View>
              </View>
              <View>
                <Button full primary onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Text>Navegar</Text>
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
