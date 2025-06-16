import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import MexicanPage from './MexicanPage';
import CartPage from './CartPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToMexican = () => {
    setCurrentPage('mexican');
  };

  const navigateToCart = () => {
    setCurrentPage('cart');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const showAlert = () => {
    Alert.alert('Alert', 'Alert Button pressed');
  };

  if (currentPage === 'mexican') {
    return <MexicanPage onNavigateBack={navigateToHome} />;
  }

  if (currentPage === 'cart') {
    return <CartPage onNavigateBack={navigateToHome} onNavigateToCheckout={() => Alert.alert('Checkout', 'Proceeding to checkout...')} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.deliveryInfo}>
          <Text style={styles.deliverNow}>Deliver now</Text>
          <Text style={styles.address}>88 Greenwich St ▼</Text>
        </View>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>👤</Text>
          <Text style={styles.icon}>🚴</Text>
          <Text style={styles.icon}>🛍️</Text>
        </View>
      </View>

      {/* Search Bar */}
      <TouchableOpacity style={styles.searchContainer} onPress={navigateToMexican}>
        <Text style={styles.searchIcon}>🔍</Text>
        <Text style={styles.searchText}>Search Uber Eats</Text>
        <Text style={styles.filterIcon}>⚙️</Text>
      </TouchableOpacity>

      <ScrollView style={styles.content}>
        {/* Featured Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured on Uber Eats</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.foodEmoji}>🍳</Text>
                <Text style={styles.heartIcon}>♡</Text>
              </View>
              <Text style={styles.restaurantName}>The Thai Spot - SF</Text>
              <Text style={styles.deliveryInfo}>⚡ $0 Delivery Fee • 15-30 min</Text>
            </View>
            <View style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.foodEmoji}>🥟</Text>
                <Text style={styles.heartIcon}>♡</Text>
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
            <View style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.foodEmoji}>🥗</Text>
                <Text style={styles.heartIcon}>♡</Text>
              </View>
              <Text style={styles.restaurantName}>Juiced</Text>
              <Text style={styles.deliveryInfo}>⚡ $0 Delivery Fee • 20-35 min</Text>
              <Text style={styles.rating}>⭐ 4.9</Text>
            </View>
            <View style={styles.restaurantCard}>
              <View style={styles.restaurantImage}>
                <Text style={styles.foodEmoji}>🥩</Text>
                <Text style={styles.heartIcon}>♡</Text>
              </View>
              <Text style={styles.restaurantName}>Pasteur Grill</Text>
              <Text style={styles.deliveryInfo}>⚡ $0 Delivery</Text>
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
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navigationButton} onPress={navigateToMexican}>
          <Text style={styles.navigationButtonText}>Browse Mexican Food</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navigationButton} onPress={navigateToCart}>
          <Text style={styles.navigationButtonText}>View Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Alert Button */}
      <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertButtonText}>Alert</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navLabel}>Grocery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToMexican}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navLabel}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToCart}>
          <Text style={styles.navIcon}>🛍️</Text>
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Account</Text>
        </TouchableOpacity>
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
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
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
    gap: 16,
  },
  icon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  filterIcon: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#00A651',
    fontWeight: '600',
  },
  horizontalScroll: {
    marginTop: 16,
  },
  restaurantCard: {
    width: 200,
    marginRight: 16,
  },
  restaurantImage: {
    width: 200,
    height: 120,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 8,
  },
  foodEmoji: {
    fontSize: 40,
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 20,
    color: '#666',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  deliveryInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  navigationButtons: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  navigationButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  alertButton: {
    backgroundColor: '#00A651',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  alertButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
  },
});

