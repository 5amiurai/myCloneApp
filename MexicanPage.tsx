import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

interface MexicanPageProps {
  onBack: () => void;
}

export default function MexicanPage({ onBack }: MexicanPageProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mexican</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryTabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Restaurants</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Grocery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Convenience</Text>
        </TouchableOpacity>
      </View>

      {/* Results Count */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsText}>450+ Results for "Mexican"</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Restaurant Card 1 - A La Plancha */}
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantImage}>
            <Text style={styles.foodEmoji}>🌮</Text>
          </View>
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>A La Plancha</Text>
            <Text style={styles.sponsoredText}>Sponsored • 💰 $0 Delivery Fee • 20-35 min</Text>
            <Text style={styles.rating}>⭐ 4.9</Text>
          </View>
        </View>

        {/* Restaurant Card 2 - Las Hermanas */}
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantImage}>
            <Text style={styles.foodEmoji}>🌯</Text>
            <View style={styles.promoTag}>
              <Text style={styles.promoText}>Spend $25, Save $5</Text>
            </View>
          </View>
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>Las Hermanas</Text>
            <Text style={styles.sponsoredText}>Sponsored • 💰 $0 Delivery Fee • 15-30 min</Text>
            <Text style={styles.rating}>⭐ 4.6</Text>
          </View>
        </View>

        {/* Restaurant Card 3 */}
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantImage}>
            <Text style={styles.foodEmoji}>🌶️</Text>
          </View>
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>Taco Bell</Text>
            <Text style={styles.sponsoredText}>💰 $0 Delivery Fee • 10-25 min</Text>
            <Text style={styles.rating}>⭐ 4.2</Text>
          </View>
        </View>

        {/* Restaurant Card 4 */}
        <View style={styles.restaurantCard}>
          <View style={styles.restaurantImage}>
            <Text style={styles.foodEmoji}>🥙</Text>
          </View>
          <View style={styles.restaurantInfo}>
            <Text style={styles.restaurantName}>Chipotle Mexican Grill</Text>
            <Text style={styles.sponsoredText}>💰 $2.99 Delivery Fee • 15-30 min</Text>
            <Text style={styles.rating}>⭐ 4.3</Text>
          </View>
        </View>
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
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Browse</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 40, // To center the title properly
  },
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 18,
  },
  categoryTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  resultsHeader: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  restaurantCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  foodEmoji: {
    fontSize: 32,
  },
  promoTag: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: '#00A86B',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  promoText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  sponsoredText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: '#666',
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

