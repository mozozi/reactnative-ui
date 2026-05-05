import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center', 
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
    textAlign: 'center', 
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#000000',
  },
  button: {
    width: '100%', 
    backgroundColor: '#000000',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    marginTop: 25,
    alignItems: 'center',
    gap: 10,
  },
  linkText: {
    color: '#000000',
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});