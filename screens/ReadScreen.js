import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, FlatList, Dimensions, Animated} from 'react-native';

const {width} = Dimensions.get('screen');
import {FlingGestureHandler, Directions, State} from 'react-native-gesture-handler'

const DATA = [
  {
    title: 'The Magic Strings of Frankie Presto',
    author: 'Mitch Albom',
    genre: 'historical fiction',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1477323385i/32735857.jpg',
  },
  {
    title: 'Remarkably Bright Creatures',
    author: 'Shelby Van Pelt',
    genre: 'Fiction',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg',
  },
  {
    title: 'Tomorrow and Tomorrow and Tomorrow',
    author:'Gabrielle Zevin',
    genre: 'Contemporary Fiction',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651600548i/58733693.jpg',
  },
  {
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    genre: 'Historical Fiction',
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033.jpg',
  },
  {
    title:'Circe',
    author:'Madeline Miller',
    genre:'Fantasy',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg',
  },
  {
    title:'The Lightning Thief',
    author:'Rick Riordan',
    genre:'Fantasy',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400602609i/28187.jpg',
  },
  {
    title:'The Secret History',
    author:'Donna Tart',
    genre:'Mystery',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451554846i/29044.jpg',
  },
  {
    title:'The Bell Jar',
    author:'Sylvia Plath',
    genre:'Classics',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554582218i/6514.jpg',
  },
  {
    title:"The Picture of Dorian Gray",
    author:"Oscar Wilde",
    genre:'Classics',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg',
  },
  {
    title:'The Hunger Games',
    author:'Suzanne Collins',
    genre:'Dystopian',
    image:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg',
  }
];

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const OverflowItems = ({data}) => {
  return (
    <View style={{height: OVERFLOW_HEIGHT, overflow:'hidden'}}>
      <View>
        {data.map((item,index) => {
          return(
            <View key={index} style={{height:OVERFLOW_HEIGHT, padding: SPACING *2}}>
              <Text style={{fontSize:16, fontWeight:'900',textTransform:'uppercase',letterSpacing:-1}} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize: 12}}>
                  {item.author}
                </Text>
                <Text style={{fontSize:12}}>{item.genre}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function ReadScreen(){
    const [data,setData] = React.useState(DATA);
    const scrollXIndex = React.useRef(new Animated.Value(0)).current;
    const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
    const[index, setIndex]= React.useState(0);
    const setActiveIndex = React.useCallback((activeIndex) => {
      scrollXIndex.setValue(activeIndex);
      setIndex(activeIndex);
    });

    React.useEffect(()=> {
      if(index === data.length-VISIBLE_ITEMS -1) {
        const newData = [...data,...data];
        setData(newData);
      }
    });

    React.useEffect(()=> {
      Animated.spring(scrollXAnimated, {
        toValue: scrollXIndex,
        useNativeDriver: true,
      }).start();

      /* setInterval(() => {
        scrollXIndex.setValue(Math.floor(Math.random()*data.length));
      },3000); */
    });
    return(
      /* <FlingGestureHandler key='left' direction={Directions.LEFT} onHandlerStateChange={ev => {
        if(ev.nativeEvent.state === State.END){
          if(index === data.length -1){
            return;
          }
          setActiveIndex(index+1)
        }
      }}>
      <FlingGestureHandler key='right' direction={Directions.RIGHT} onHandlerStateChange={ev => {
        if(ev.nativeEvent.state === State.END){
          if(index === 0){
            return;
          }
          setActiveIndex(index-1)
        }
      }}> */
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <OverflowItems data={data} scrollXAnimated={scrollXAnimated}/>
        <FlatList 
          data={data}
          keyExtractor={(_,index) => String(index)}
          horizontal
          inverted
          contentContainerStyle={{flex:1, justifyContent:'center', padding: SPACING*2}}
          scrollEnabled={false}
          CellRendererComponent={({item,index,children,style,...props})=>{
            const newStyle = [
              style, {zIndex: data.length -index}
            ]
            return(
              <View style={newStyle} index={index} {...props}>
                {children}
              </View>
            )
          }}
          renderItem={({item,index}) =>{
            const inputRange=[index-1,index,index+1]
            const translateX=scrollXAnimated.interpolate({
              inputRange,
              outputRange: [50,0,-100]
            })
            const scale=scrollXAnimated.interpolate({
              inputRange,
              outputRange: [0.8,1,1.3]
            })
            const opacity=scrollXAnimated.interpolate({
              inputRange,
              outputRange: [1-1/VISIBLE_ITEMS,1,0]
            })
            return <Animated.View style={{position:'absolute', left: -ITEM_WIDTH/2, opacity, transform:[{translateX,},{scale}]}}>
              <Image source={{uri:item.image}} style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                borderRadius: 14,
              }}/>
            </Animated.View>
          }}/>
      </SafeAreaView>
      /* </FlingGestureHandler>
      </FlingGestureHandler> */
    );
  }
  