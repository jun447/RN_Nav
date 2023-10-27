import React, { useEffect, useState } from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';



const LUSE = () => {
    
    const [count,setCount] = useState(0)
    const [number,setNumber] = useState(0)
    const [flag,setFlag] = useState(0)
    
    useEffect(() => {
        console.log("useEffect called")
    },)
    useEffect(() => {
        console.log("useEffect called []")
        // behave as unmount
        return () => {
            console.log("unmount called")
        }
    },[])
    useEffect(() => {
        console.log("useEffect called [count] ")
    },[count])
    useEffect(() => {
        console.log("useEffect called [flag]")
    },[flag])
    useEffect(() => {
        console.log("useEffect called [number] ")
    },[number])
    useEffect(() => {
        console.log("useEffect called [count,flag,number] ")
    },[count,flag,number])


    return (
        <>
            <View>
                <Text>Welcome to LUSE screen!</Text>
                <Text>Count is = {count}</Text>
                <Text>Number is = {number}</Text>
                <Text>Flag is = {flag}</Text>
            </View>
            {console.log("render called or not")}

            {/* button to update Count */}
            <Button
                title="Update Count"
                onPress={() => setCount(count+1)}
                style={styles.button}
            />
            {/* button to update Number */}
            <Button
                title="Update Number"
                onPress={() => setNumber(number+1)}
                style={styles.button}
            />
            {/* create button for flag as well */}
            <Button
                title="Update Flag"
                onPress={() => setFlag(flag+1)}
                style={styles.button}
            />
            {/* update all */}
            <Button
                title="Update All"
                onPress={() => {
                    // setCount(count+1);
                    // setNumber(number+1);
                    // setFlag(flag+1)
                    global.setting = {
                        font: 20,
                        color: 'green',
                        fontWeight: 'bold',
                    };
                }}
                style={styles.button}
            />
        </>
    );
};

//  create styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      header: {
        fontSize: 32,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
      },
});

export default LUSE;
