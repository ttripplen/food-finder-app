import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const deals = [
  {
    id: '1',
    title: 'Brew & Bean Cafe',
    event: 'Happy Hour',
    discount: '-30%',
    image: require('../assets/loading.png'),
  },
  {
    id: '2',
    title: 'Spicy Spoon Bistro',
    event: 'Lunch Deal',
    discount: '-30%',
    image: require('../assets/loading.png'),
  },
  {
    id: '3',
    title: 'Palm Tree Coffee',
    event: 'Weekend Special',
    discount: '-30%',
    image: require('../assets/loading.png'),
  },
];

const restaurants = [
  {
    id: '1',
    name: 'Sunny Side Café',
    address: '123 Morning St, Sunrise City',
    open: 'Opens at 8:00 AM',
    rating: '4.8',
    distance: '2.3km',
    time: '25 minutes',
    image: require('../assets/loading.png'),
  },
  {
    id: '2',
    name: 'The Spicy Grill',
    address: '45 Pepper Lane, Downtown',
    open: 'Opens at 8:00 AM',
    rating: '4.5',
    distance: '3.2km',
    time: '27 minutes',
    image: require('../assets/loading.png'),
  },
  {
    id: '3',
    name: 'Bamboo Noodle House',
    address: '89 Lotus Ave, River District',
    open: 'Opens at 8:00 AM',
    rating: '4.5',
    distance: '3.2km',
    time: '27 minutes',
    image: require('../assets/loading.png'),
  },
];
const topRatedPlaces = [
  {
    id: '1',
    title: 'Pastel iced donuts',
    time: '30 Mins',
    author: 'heather ford',
    rating: 5,
    reviews: 1567,
    image: require('../assets/loading.png'),
  },
  {
    id: '2',
    title: 'Berry Smoothie',
    time: '20 Mins',
    author: 'jane smith',
    rating: 4,
    reviews: 832,
    image: require('../assets/loading.png'),
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.locationSearch}>
        <View style={styles.locationHeader}>
          <View>
            <Text style={styles.locationTitle}>Location</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-sharp" size={20} color="#fff" />
              <Text style={styles.locationText}>New York, USA</Text>
              <Ionicons name="chevron-down" size={20} color="#fff" />
            </View>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <Ionicons name="notifications-outline" size={24} color="#3971b8" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons name="search" size={20} color="#3971b8" />
            <TextInput placeholder="Search" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.customIconButton}>
            <Ionicons name="options-outline" size={22} color="#3971b8" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerScroll}>
          <Image source={require('../assets/loading.png')} style={styles.banner} />
          <Image source={require('../assets/loading.png')} style={styles.banner} />
          <Image source={require('../assets/loading.png')} style={styles.banner} />
        </ScrollView>

        <Text style={styles.sectionTitle}>🔥 Hot Deal</Text>
        <View style={styles.dealSection}>
          {Array.from({ length: Math.ceil(deals.length / 3) }, (_, i) => {
            const startIndex = i * 3;
            const bigItem = deals[startIndex];
            const smallItems = deals.slice(startIndex + 1, startIndex + 3);

            return (
              <View key={i} style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1.5, marginRight: 8 }}>
                  {bigItem && (
                    <View style={styles.dealCard}>
                      <View style={styles.discountBadge}>
                        <Text style={styles.dealDiscount}>{bigItem.discount}</Text>
                      </View>
                      <Image source={bigItem.image} style={{ width: '100%', height: 240, borderRadius: 8 }} resizeMode="cover" />
                      <View style={{ padding: 10 }}>
                        <Text style={styles.dealTitle}>{bigItem.title}</Text>
                        <View style={styles.priceRow}>
                          <Text style={styles.dealPrice}>{bigItem.event}</Text>
                        </View>
                      </View>

                    </View>
                  )}
                </View>

                <View style={{ flex: 2, justifyContent: 'space-between' }}>
                  {smallItems.map((item) => (
                    <View key={item.id} style={styles.dealCard}>
                      <View style={styles.discountBadge}>
                        <Text style={styles.dealDiscount}>{item.discount}</Text>
                      </View>
                      <Image source={item.image} style={{ width: '100%', height: 100, borderRadius: 8 }} resizeMode="cover" />
                      <Text style={styles.dealTitle}>{item.title}</Text>
                      <View style={styles.priceRow}>
                        <Text style={styles.dealPrice}>{item.event}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
        {/* Rating */}
        <View>
          <Text style={styles.sectionTitle}>🏆  Top Rated Places</Text>
          <FlatList
            data={topRatedPlaces}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.ratingSection}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.cardContent}>
                  <Text style={styles.category}>Trending Places</Text>
                  <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                  <Text style={styles.author}>by {item.author}</Text>
                  <View style={styles.row}>
                    <View style={styles.stars}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          key={i}
                          name="star"
                          size={14}
                          color={i < item.rating ? '#f7c844' : '#ddd'}
                          style={{ marginRight: 2 }}
                        />
                      ))}
                    </View>
                    <View style={styles.reviewBox}>
                      <Icon name="user" size={12} color="#aaa" />
                      <Text style={styles.reviewText}> {item.reviews}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>


        {/* List */}
        <Text style={styles.sectionTitle}> Places Near You </Text>
        {restaurants.map((item) => (
          <View key={item.id} style={styles.restaurantCard}>
            <Image source={item.image} style={styles.restaurantImage} />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{item.name}</Text>
              <Text style={styles.restaurantDetail}>{item.address}</Text>
              <Text style={styles.restaurantDetail}>{item.open}</Text>
              <Text style={styles.restaurantDetail}>
                ⭐ {item.rating} · 📍 {item.distance} · ⏱️ {item.time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfcee',
  },
  locationSearch: {
    flex: 1,
    width: "100%",
    height: 180,
    backgroundColor: "#3971b8",
    borderRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    position: "absolute",
    top: 0,
    justifyContent: "center",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    borderColor: "#c8d69b",
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  content: {
    marginTop: 170,
    paddingHorizontal: 20,

  },
  locationRow: {
    flexDirection: 'row',
    borderRadius: 12,
    marginTop: 6,
  },
  locationTitle: {
    color: '#fbfcee',
    fontWeight: '400',
    fontSize: 14,
  },
  locationText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 5,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    height: 50,
    width: "84%"
  },
  input: {
    flex: 1,
    color: '#a8b874',
  },
  bellButton: {
    backgroundColor: '#f8eba8',
    padding: 10,
    borderRadius: 12,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  customIconButton: {
    marginLeft: 12,
    backgroundColor: '#f8eba8',
    padding: 10,
    borderRadius: 12,
  },
  bannerScroll: {
    marginTop: 5,
  },
  banner: {
    width: 280,
    height: 140,
    borderRadius: 16,
    marginRight: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 8,
    color: "#3971b8"
  },
  dealSection: {
    backgroundColor: "#f8eba8",
    padding: 10,
    borderRadius: 8,
  },
  dealCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 8
  },
  dealImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#a8b874',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    zIndex: 1,
  },
  dealDiscount: {
    color: '#fff', fontWeight: 'bold', fontSize: 12
  },
  dealTitle: {
    fontWeight: '600',
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row', alignItems: 'center', marginTop: 4
  },
  dealPrice: {
    color: '#a8b874',
    fontWeight: 'bold',
    fontSize: 12,
    paddingRight: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 12,
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 4,
    borderRadius: 12,
    elevation: 2,
    padding: 8,
    alignItems: 'center',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  restaurantInfo: {
    marginLeft: 12,
    flex: 1,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  restaurantDetail: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
  //rating
  ratingSection: {
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  cardContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: -20,
    marginHorizontal: 10,
    zIndex: 1,
  },
  category: {
    fontSize: 12,
    color: '#aaa',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#a8b874',
    flex: 1,
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 8,
  },
  author: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  stars: {
    flexDirection: 'row',
    marginTop: 8,
  },
  reviewBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginTop: 8,
  },
  reviewText: {
    fontSize: 11,
    color: '#666',
  },
});
// #c8d69b Tea Green
// #a8b874
// #f6e6a5 Vanilla
// #f8eba8
// #3971b8 Celtic Blue
// #fbfcee Ivory
// #343b1b Drab Dark Brown