import { View, Text } from 'react-native'
import React from 'react'

const MemberListContainer = ({memberList}) => {
  return (
    <View style={{backgroundColor: "red"}}>
     {memberList.map((eachMember, index) => (
             <Text key={index}>{eachMember}</Text>
           ))}
    </View>
  )
}

export default MemberListContainer