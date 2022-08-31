import React from 'react'
import DrawerNavigator from './navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App(){
        return(
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        )   
}
