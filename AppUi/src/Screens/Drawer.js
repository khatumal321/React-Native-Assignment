import React, { Component } from 'react';
import { Drawer, Button, Text } from 'native-base';
import SideBar from './Sidebar';


export default class DrawerExample extends Component {
  openDrawer() { this.drawer._root.open() }
  closeDrawer() {
    this.drawer._root.close()
  };

  render() {
    return (
      <Drawer ref={(ref) => { this.drawer = ref; }} content={
        <SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()} >
          <Button onPress={()=>this.openDrawer()}><Text>Menu</Text></Button>
      </Drawer>
    )
  }
}






