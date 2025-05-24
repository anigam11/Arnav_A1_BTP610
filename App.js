import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const App = () => {
  return (
    <ScrollView style={styles.mainScreen}>
      <View style={styles.optionRow}>

        <View style={styles.option}>
          <Text style={styles.optionLabel}>🎧</Text></View>

        <View style={[styles.option, styles.selectedOption]}>
          <Text style={styles.selectedLabel}>All</Text></View>

        <View style={styles.option}>
          <Text style={styles.optionLabel}>Music</Text></View>

        <View style={styles.option}>
          <Text style={styles.optionLabel}>Podcasts</Text></View>

        <View style={styles.option}>
          <Text style={styles.optionLabel}>Audiobooks</Text></View>

      </View>

      <Text style={styles.sectionHeading}>Your Playlists</Text>

      <View style={styles.itemsGrid}>

        <View style={styles.gridItem}>
          <Image source={require("./assets/playlist1.png")} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Release Radar</Text>
        </View>

        <View style={styles.gridItem}>
          <Image source={require("./assets/playlist2.png")} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Workout Hits</Text>
        </View>

        <View style={styles.gridItem}>
          <Image source={require("./assets/playlist3.png")} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Daily Chill</Text>
        </View>

        <View style={styles.gridItem}>
          <Image source={require("./assets/playlist4.png")} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Focus Time</Text>
        </View>

      </View>

      <Text style={styles.sectionHeading}>Recents</Text>

      <View style={styles.recentBlock}>

        <View style={styles.recentItem}>
          <Image source={require("./assets/recents1.png")} style={styles.recentThumb} />

          <View style={styles.recentTextBlock}>
            <Text style={styles.recentTrack}>Pop Mix</Text>
            <View style={styles.recentDetails}>
              <Text style={styles.detailText}>Playlist</Text>
              <Text style={styles.detailText}>Recently Played</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentItem}>
          <Image source={require("./assets/recents1.png")} style={styles.recentThumb} />

          <View style={styles.recentTextBlock}>

            <Text style={styles.recentTrack}>Hot Hits</Text>
            <View style={styles.recentDetails}>
              <Text style={styles.detailText}>Playlist</Text>
              <Text style={styles.detailText}>Recently Played</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentItem}>
          <Image source={require("./assets/recents1.png")} style={styles.recentThumb} />
          
          <View style={styles.recentTextBlock}>
            <Text style={styles.recentTrack}>Upbeat Mix</Text>
            <View style={styles.recentDetails}>
              <Text style={styles.detailText}>Playlist</Text>
              <Text style={styles.detailText}>Recently Played</Text>

            </View>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Audiobooks for you</Text>
      <View style={styles.itemsGrid}>
        <View style={styles.audioCard}>

          <Image source={require("./assets/audiobooks.jpg")} style={styles.audioCover} />
          <View style={styles.audioInfo}>
            <Text style={styles.audioTag}>Included in Premium</Text>
            <Text style={styles.audioTitle}>Mastering Conversation...</Text>
            <Text style={styles.audioAuthor}>Helen Stone</Text>

          </View>
        </View>
        <View style={styles.audioCard}>
          <Image source={require("./assets/audiobooks.jpg")} style={styles.audioCover} />
          <View style={styles.audioInfo}>
            <Text style={styles.audioTag}>Included in Premium</Text>
            <Text style={styles.audioTitle}>Control your mind and...</Text>
            <Text style={styles.audioAuthor}>Eric Robertson</Text>
          </View>
        </View>

        <View style={styles.audioCard}>
          <Image source={require("./assets/audiobooks.jpg")} style={styles.audioCover} />

          <View style={styles.audioInfo}>
            <Text style={styles.audioTag}>Included in Premium</Text>
            <Text style={styles.audioTitle}>Ikigai: The Japanese Sec...</Text>
            <Text style={styles.audioAuthor}>Hector Garcia</Text>
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 12,
    backgroundColor: "#000",
  },

  optionRow: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 8,
    marginBottom: 16,
    justifyContent: "flex-start",
  },

  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#333",
    borderRadius: 20,
  },

  selectedOption: {
    backgroundColor: "#00C851",
  },

  optionLabel: {
    color: "#fff",
    fontSize: 16,
  },

  selectedLabel: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
    marginTop: 10,
  },
  itemsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },

  gridImage: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
    borderRadius: 6,
  },

  gridLabel: {
    color: "#fff",
    fontSize: 14,
    marginTop: 8,
  },

  recentBlock: {
    gap: 12,
  },

  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  recentThumb: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: 12,
  },

  recentTextBlock: {
    flex: 1,
  },

  recentTrack: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },

  recentDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  detailText: {
    color: "#aaa",
    fontSize: 11,
  },

  audioCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },

  audioCover: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 8,
    borderRadius: 6,
  },

  audioInfo: {
    gap: 4,
  },

  audioTag: {
    color: "green",
    fontSize: 12,
    fontWeight: "600",
  },

  audioTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },

  audioAuthor: {
    color: "#666",
    fontSize: 12,
  },


});

export default App;