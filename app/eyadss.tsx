import {Modal,View,SafeAreaView,StyleSheet,Text,TouchableOpacity,ScrollView,Pressable,Alert, Image,} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import Images from '@/assets/images/Images';
import ScreenNames from '@/components/ScreenNames';
import data from '@/assets/data';
import ProdactItem from '@/components/ProdactItem';

const Eyadss = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();

  const renderProducts = () => {
    return data.map((val, index) => (
      <View key={index}>
        <TouchableOpacity onPress={() => nav.navigate(ScreenNames.build, val)}>
          <ProdactItem {...val} />
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.dbg}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}></Text>
            <TouchableOpacity onPress={() => nav.navigate('Gaming')}>
            <Text style={styles.ghd}>Gaming</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate('tools')}>
            <Text style={styles.drl}>Tools</Text>
          </TouchableOpacity>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <SafeAreaView>
        <ScrollView>
          <View>
          <TouchableOpacity onPress={() => nav.navigate('cart')} style={styles.cartContainer}>
          <Image style={styles.dfgu} source={Images.adfds}/>
          </TouchableOpacity>
          </View>
          {renderProducts()}
          <TouchableOpacity>
            {/* <Image style={styles.hje} source={Images.airc} /> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Show modal</Text>
          </TouchableOpacity>
      
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Eyadss;

const styles = StyleSheet.create({

  dfgu:{
    position:"absolute",
    right:20,
    marginBottom:400
    
  },
  drl: {
    marginTop: 30,
  },
  ghd: {
    marginTop: 70,
  },
  hje: {
    height: 30,
    width: 91,
    resizeMode: 'contain',
    marginLeft: '80%',
    marginTop: 60,
  },
  dbg: {
    flex: 1,
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cartContainer: {
    marginBottom: 50,
  }
});
