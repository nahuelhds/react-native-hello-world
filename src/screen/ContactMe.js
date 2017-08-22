// @flow
import React from 'react';
import { Alert, StyleSheet } from 'react-native'
import {
  Button,
  Container,
  Content,
  Text,
  H1,
  Icon,
  Form,
  Item,
  Label,
  Input,
  View,
} from 'native-base';

import Theme from 'theme/variables/platform'

import DrawerHeader from 'component/DrawerHeader';
import lang from 'lang/main'

type Props = {}

type State = {
  name: String,
  email: String,
  message: String,
  errors: { [String]: Boolean }
};

export default class ContactMeScreen extends React.Component<Props, State> {
  // Estado inicial
  state = {
    name: '',
    email: '',
    message: '',
    errors: {
      name: false,
      email: false,
      message: false,
    }
  }

  render() {
    // Por cada campo obtengo el estado de validacion correspondiente
    // null, error o success
    const fieldValidation = {
      name: this.getFieldValidationState('name'),
      email: this.getFieldValidationState('email'),
      message: this.getFieldValidationState('message'),
    }

    // Estado de validacion del formulario
    // false inhabilita el boton de envio
    // true lo habilita
    const formValidation = {
      disabled: !this.isValid()
    }

    return <Container>
      <DrawerHeader
        title={lang.t('Contact me')}
        onPress={() => this.props.navigation.navigate("DrawerOpen")}
      ></DrawerHeader>
      <Content>
        <View style={css(styles.alignCenter)}>
          <Icon active name="help-buoy" style={css([styles.iconLarge, { color: Theme.brandInfo }])}></Icon>
          <Text style={css(styles.textCenter)}>{lang.t('contactme.description')}</Text>
          <H1>{lang.t('contactme.title')}</H1>
        </View>
        <View>
          <Form>
            {/* Aqui se incluye el estado de validacion del campo */}
            <Item floatingLabel {...fieldValidation.name}>
              <Label>{lang.t('form.label.name')}</Label>
              {/* Al cambiar el estado, actualizo el estado */}
              {/* Y al presionar enter, envio el foco al proximo campo */}
              <Input
                onChangeText={(text) => this.setValue('name', text)}
                onSubmitEditing={() => this.emailInput._root.focus()}
              />
            </Item>
            <Item floatingLabel {...fieldValidation.email}>
              <Label>{lang.t('form.label.email')}</Label>
              {/* Para hacer que el campo anterior enfoque a este, lo debo asignar en this mediante getRef */}
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                getRef={(component) => this.emailInput = component}
                onChangeText={(text) => this.setValue('email', text)}
                onSubmitEditing={() => this.messageInput._root.focus()}
              />
            </Item>
            <Item floatingLabel {...fieldValidation.message}>
              <Label>{lang.t('form.label.message')}</Label>
              <Input
                getRef={(component) => this.messageInput = component}
                onChangeText={(text) => this.setValue('message', text)}
              />
            </Item>
          </Form>
        </View>
      </Content>
      <View padder>
        <Text note style={css(styles.textCenter)}>{lang.t('form.helpText')}</Text>
      </View>
      <Button full success {...formValidation} onPress={() => this.submit()}>
        <Text>{lang.t('form.send')}</Text>
      </Button>
    </Container>
  }

  /**
   * Metodo de envio del formulario
   *
   * @memberof ContactMeScreen
   */
  submit() {
    Alert.alert('¡Gracias por contactarte conmigo!')
  }

  // Reglas de validacion
  rules = {
    name: /\w+/i,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: /\w+/i,
  }

  /**
   * A partir de la validacion del campo dado, se devuelven los atributos para utilizar en el <Input/>
   *
   * @param {String} fieldName
   * @returns {Object}
   * @memberof ContactMeScreen
   */
  getFieldValidationState(fieldName) {
    const fieldIsValid = this.validateField(fieldName)
    return fieldIsValid ? { success: true } : (fieldIsValid === false ? { error: true } : {})
  }

  /**
   * Devuelve el estado de validacion del campo requerido
   *
   * @param {String} fieldName
   * @returns {Boolean|Null}
   * @memberof ContactMeScreen
   */
  validateField(fieldName) {
    if (this.state[fieldName].length) {
      return !this.state.errors[fieldName]
    }
    return null
  }

  /**
   * Define el valor del campo y ademas indica si el mismo contiene errores
   *
   * @param {String} key
   * @param {String} value
   * @memberof ContactMeScreen
   */
  setValue(key, value) {
    this.setState({ [key]: value })
    const isValid = !this.rules[key].test(value)
    const errors = Object.assign({}, this.state.errors, { [key]: isValid })
    this.setState({ errors })
  }

  /**
   * Indica si el formulario es valido
   *
   * @returns {Boolean}
   * @memberof ContactMeScreen
   */
  isValid() {
    const errors = this.state.errors
    for (let fieldName in errors) {
      if (!this.state[fieldName].length || errors[fieldName]) {
        return false
      }
    }
    return true
  }
}

const css = StyleSheet.flatten
const styles = StyleSheet.create({
  alignCenter: {
    alignItems: "center",
  },
  iconLarge: {
    fontSize: 100,
  },
  textCenter: {
    textAlign: "center",
  },
})
