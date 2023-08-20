
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../screens/home/perfil';
import Configuracoes from '../screens/configscreens/configurações';
import Mapainteiro from '../screens/home/mapa/mapainteiro';
import ErrosApp from '../screens/configscreens/erroapp';
import BottomTabs from './BottomTab';
import EditarPerfil from '../screens/configscreens/editarperfil';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}) {
  return (
      <Drawer.Navigator
      initialRouteName='BottomTab'
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
      }}
      drawerStyle={{
        backgroundColor: 'transparent', // Defina o plano de fundo como transparente
      }}
      >
        <Drawer.Screen name='BottomTab' component={BottomTabs}/>
        <Drawer.Screen name='Editar Perfil' component={EditarPerfil}/>
        <Drawer.Screen name='Configurações' component={Configuracoes}/>
        <Drawer.Screen name='Abrir Mapa' component={Mapainteiro}/>
        <Drawer.Screen name='Reportar Erros' component={ErrosApp}/>
      </Drawer.Navigator>

  );
}