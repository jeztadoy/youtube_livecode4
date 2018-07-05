import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  homeContainer: {
    padding: 10
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  inputSearch: {
    flex: 3,
    fontSize: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10
  },
  buttonSearch: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ef2f4f',
    borderRadius: 5
  },
  textSearch: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    padding: 10,
  },
  listContainer: {
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: 10
  },
  itemThumbnail: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    height: 160
  },
  itemTitle: {
    flex: 3,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  detailContainer: {
    padding: 10
  },
  detailTitle: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  detailVideo: {
    marginBottom: 10
  },
  loginContainer: {

  },
  registerContainer: {

  },
  formContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5
  },
  loginContainer: {
    display: 'flex',
    padding: 10
  },
  registerContainer: {
    display: 'flex',
    padding: 10
  },
  inputFullname: {
    padding: 10
  },
  inputEmail: {
    padding: 10
  },
  inputPassword: {
    padding: 10
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#ef2f4f',
    borderRadius: 5,
    marginBottom: 10
  },
  textLogin: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  buttonRegister: {
    alignItems: 'center',
    backgroundColor: '#ef2f4f',
    borderRadius: 5,
    marginBottom: 10
  },
  textRegister: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  errorMessage: {
    padding: 10,
    color: 'red'
  },
  webViewContainer: {
    width: '100%',
    height: 180,
    marginBottom: 10
  },
  favButton: {
    marginTop: 10
  },
  favText: {
    color: '#ef2f4f'
  }
})

export default styles
