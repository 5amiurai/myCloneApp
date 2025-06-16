import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import MexicanPage from './MexicanPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'mexican'>('home');

  const showAlert = () => {
    Alert.alert('Alert Button pressed');
  };

  const navigateToMexican = () => {
    setCurrentPage('mexican');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'mexican') {
    return <MexicanPage onBack={navigateToHome} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliverNow}>Deliver now</Text>
          <Text style={styles.address}>88 Greenwich St ▼</Text>
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconButton}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          <View style={styles.iconButton}>
            <Text style={styles.iconText}>🚶</Text>
          </View>
          <View style={styles.iconButton}>
            <Text style={styles.iconText}>🛒</Text>
          </View>
        </View>
      </View>

      {/* Search Bar */}
      <TouchableOpacity style={styles.searchContainer} onPress={navigateToMexican}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>Search Uber Eats</Text>
        <Text style={styles.filterIcon}>⚙️</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Featured Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured on Uber Eats</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.imageText}>🍜</Text>
                <View style={styles.heartIcon}>
                  <Text style={styles.heartText}>🤍</Text>
                </View>
              </View>
              <Text style={styles.restaurantName}>The Thai Spot - SF</Text>
              <View style={styles.deliveryRow}>
                <Text style={styles.deliveryIcon}>💰</Text>
                <Text style={styles.deliveryText}>$0 Delivery Fee • 15-30 min</Text>
              </View>
            </View>
            <View style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.imageText}>🥟</Text>
                <View style={styles.heartIcon}>
                  <Text style={styles.heartText}>🤍</Text>
                </View>
              </View>
              <Text style={styles.restaurantName}>Nan Xiang Xiaolongbao</Text>
              <Text style={styles.deliveryInfo}>$2.49 Delivery</Text>
            </View>
          </ScrollView>
        </View>

        {/* Order Again Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Order again</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.orderAgainCard}>
              <View style={styles.orderAgainImage}>
                <Text style={styles.imageText}>🥗</Text>
                <View style={styles.heartIcon}>
                  <Text style={styles.heartText}>🤍</Text>
                </View>
              </View>
              <Text style={styles.restaurantName}>Juiced</Text>
              <View style={styles.deliveryRow}>
                <Text style={styles.deliveryIcon}>💰</Text>
                <Text style={styles.deliveryText}>$0 Delivery Fee • 20-35 min</Text>
              </View>
              <Text style={styles.rating}>⭐ 4.9</Text>
            </View>
            <View style={styles.orderAgainCard}>
              <View style={styles.orderAgainImage}>
                <Text style={styles.imageText}>🥩</Text>
                <View style={styles.heartIcon}>
                  <Text style={styles.heartText}>🤍</Text>
                </View>
              </View>
              <Text style={styles.restaurantName}>Pasteur Grill</Text>
              <View style={styles.deliveryRow}>
                <Text style={styles.deliveryIcon}>💰</Text>
                <Text style={styles.deliveryText}>$0 Delivery</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Stores Near You Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Stores near you</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
        </View>

        {/* Navigation Button to Mexican Page */}
        <TouchableOpacity style={styles.mexicanButton} onPress={navigateToMexican}>
          <Text style={styles.mexicanButtonText}>Browse Mexican Food</Text>
        </TouchableOpacity>

        {/* Alert Button */}
        <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Grocery</Text>
        </View>
        <TouchableOpacity style={styles.navItem} onPress={navigateToMexican}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Browse</Text>
        </TouchableOpacity>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={styles.navText}>Cart</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  deliveryInfo: {
    flex: 1,
  },
  deliverNow: {
    fontSize: 14,
    color: '#666',
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  filterIcon: {
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  seeAll: {
    fontSize: 14,
    color: '#00A86B',
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  restaurantCard: {
    width: 200,
    marginRight: 12,
  },
  restaurantImage: {
    width: 200,
    height: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartText: {
    fontSize: 14,
  },
  imageText: {
    fontSize: 40,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  deliveryText: {
    fontSize: 12,
    color: '#666',
  },
  deliveryInfo: {
    fontSize: 12,
    color: '#666',
  },
  orderAgainCard: {
    width: 160,
    marginRight: 12,
  },
  orderAgainImage: {
    width: 160,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  mexicanButton: {
    backgroundColor: '#FF6B35',
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  mexicanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertButton: {
    backgroundColor: '#00A86B',
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    fontSize: 10,
    color: '#666',
  },
});

