import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

/*
Ejercicio 2
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    alignSelf: 'stretch',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

*/

/*
Ejercicio 3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

*/

/*
Ejercicio 4
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    justifyContent: 'space-between',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    alignSelf: 'center',
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

*/

/*
Ejercicio 5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cajaMorada: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

*/

/*
Ejercicio 6
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
  },
  cajaMorada: {
    flex: 2,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    flex: 2,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    flex: 4,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
*/

/*
Ejercicio 7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },

  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
*/

/*
Ejercicio 8
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    left: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },

  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

*/

/*
Ejercicio 9
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    top: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    left: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },

  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
*/

/*
Ejercicio 10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28435B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    top: 50,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  },

  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
*/
