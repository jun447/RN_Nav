import { FlatList,TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
const Category = () => {
    const categoryList=[
        {
            id:1,
            name:'Gas Station',
            value:'gas_station',
            icon:require('./../../../assets/gas.png')
        },
        {
            id:2,
            name:'Restaurants',
            value:'restaurant',
            icon:require('./../../../assets/food.png')
        },
        {
            id:3,
            name:'Cafe',
            value:'cafe',
            icon:require('./../../../assets/cafe.png')
        },
        {
            id:4,
            name:'Motels',
            value:'Motel',
            icon:require('./../../../assets/food.png')
        },
    ]
      return (
        <View style={{marginTop:15}}>
          <Text style={{
            fontSize:20,
            fontFamily:'railway-bold',
            
          }} >{' Select Top Category'}</Text>
    
          <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop:5}}
            renderItem={({item})=>(
              <TouchableOpacity 
            //   onPress={()=>setSelectedCategory(item.value)} 
              onPress={()=>console.log(item.value)} 
              >
                <CategoryItem category={item} />
              </TouchableOpacity>
            )}
          />
          
        </View>
      )
}



export default Category