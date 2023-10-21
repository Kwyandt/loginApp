import React, {useState, useEffect} from 'react';
import {SafeAreaView, Image, FlatList} from 'react-native';

const BASE_URI = 'https://source.unsplash.com/random?sig=1';

export default function LookScreen(){
    const [data, setData] = useState([1,2,3,4,5]);
    useEffect(()=> {
      moreImages();
    },[]);
    const moreImages = () => {
      setData(prevState => [...prevState,...Array.from({length:20}).map((_,i) => i + 1 + prevState.length)]);
    }
    /* const fetchMore = () => {
      setData(prevState => [...prevState, ...Array.from({length:20}).map((0,i)=> i + 1 + prevState.length)]);
    }; */
    return(
      <SafeAreaView>
        <FlatList data ={data} style={{width: '100%', backgroundColor: '#000'}} numColumns={3}
        onEndReached={moreImages} keyExtractor={e => e} renderItem={({item})=>(<Image source = {{uri: BASE_URI + item}} 
        style={{aspectRatio: 1, width: '100%', flex:1}}/>)}/>
      </SafeAreaView>
    );
  }
  