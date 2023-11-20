import { TouchableOpacity, StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{" Create your"}</Text>
        <Text style={styles.text}>{" Account"}</Text>
      </View>
    
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="       Username" />
          <FontAwesome
            style={styles.icon}
            name="user-o"
            size={16}
            color="#9e9e9e"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="       Email Address"
            secureTextEntry={true}
          />
          <FontAwesome
            style={styles.icon}
            name="envelope-o"
            size={18}
            color="#9e9e9e"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="       Password"
            secureTextEntry={true}
          />
          <FontAwesome
            style={styles.icon}
            name="lock"
            size={18}
            color="#9e9e9e"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="       Mobile Number"
            // secureTextEntry={true}
          />
          <FontAwesome
            style={styles.icon}
            name="mobile-phone"
            size={18}
            color="#9e9e9e"
          />
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.checkboxWrapper}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
              <FontAwesome
                style={styles.checkbox}
                name={isChecked ? "check-square-o" : "square-o"}
                size={20}
                color="#9e9e9e"
              />
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </View>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.separatorText}>or continue with</Text>
            <View style={styles.line} />
          </View>
        </View>
      </View>
      
      <View style={styles.thrdpartyLoginAPI_wrapper}>
        <View style={styles.mangIcon}>
          <FontAwesome name="facebook-square" size={30} color="#3b5998" />
        </View>
        <View style={styles.mangIcon}>
          <FontAwesome name="google" size={30} color="#db4437" />
        </View>
        <View style={styles.mangIcon}>
          <FontAwesome name="apple" size={30} color="#000000" />
        </View>
      </View>
      <View style={styles.signInWrapper}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <Text style={styles.signInLink}>Sign in</Text>
      </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: "violet",
    // borderWidth: 5,
    backgroundColor: "#fff",
  },
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  textWrapper: {
    flex: 0.4,
    marginTop: 80,
    marginBottom: 20,
    // borderColor: "pink",
    // borderWidth: 3,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "baseline",
  },
  inputWrapper: {
    // flex: 0.21,
    // borderColor: "blue",
    // borderWidth: 1,
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 25,
    left: 20,
  },
  input: {
    height: 50,
    width: "95%",
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: 15,
    color: "#000",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  formWrapper: {
    flex: 0.45,
    // borderColor: "red",
    // borderWidth: 3,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 15,
    color: "#9e9e9e",
  },
  signupButton: {
    width: '95%',
    borderRadius: 25,
    backgroundColor: '#7737b9',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },
  signupButtonText: {
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#9e9e9e',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#9c9c9c',
  },
  thrdpartyLoginAPI_wrapper: {
    flex: 0.1,
    // borderColor: "yellow",
    // borderWidth: 3,
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'space-evenly',
  },
  mangIcon: {
    borderWidth: 0.8,
    borderColor: '#f6f6f6',
    // marginVertical: 8,
    width: 80,
    height: 60,
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  signInWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 5,
  },
  signInText: {
    fontSize: 16,
    color: '#c9c9c9',
  },
  signInLink: {
    fontSize: 16,
    color: '#8f2bfd',
  },
});
export default Signup;