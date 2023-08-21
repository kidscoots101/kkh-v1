import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar, 
  SafeAreaView
} from "react-native";
import TopBar from "../components/TopBar";


const data = [
  {
    id: "1",
    title: "Training Programmes",
    subtitles: [
      { id: "sub1", text: "Training Programmes", isBookmarked: false }
    ]
  },
  {
    id: "2",
    title: "Guidlines for Paediatric Anaesthesia",
    subtitles: [
      { id: "sub2", text: "Guidelines for the provision of the Anaesthesia for Paediatric patients", isBookmarked: false },
      { id: "sub3", text: "Preoperative preparation and induction techniques", isBookmarked: false }
    ]
  },
  {
    id: "3",
    title: "Paediatric Anaestheisa",
    subtitles: [
      { id: "sub4", text: "Equipment", isBookmarked: false },
      { id: "sub5", text: "Dental Injury", isBookmarked: false },
      { id: "sub6", text: "Nausea Vomitting", isBookmarked: false },
      { id: "sub7", text: "Common Medical Conditions", isBookmarked: false },
      { id: "sub8", text: "Preoperative Evaulation", isBookmarked: false },
      { id: "sub9", text: "Premedictaion", isBookmarked: false },
      { id: "sub10", text: "Emergence delirium", isBookmarked: false }
    ]
  },
  {
    id: "4",
    title: "Fluid Guidlines",
    subtitles: [
      { id: "sub11", text: "Fluid Guidelines in children", isBookmarked: false }
    ]
  },
  {
    id: "5",
    title: "Neonatal Anaesthesia",
    subtitles: [
      { id: "sub12", text: "Nenotal Anaesthesia", isBookmarked: false }
    ]
  },
  {
    id: "6",
    title: "Cardiac Guidlines",
    subtitles: [
      { id: "sub13", text: "Prophylaxis for Infective Endocarditis", isBookmarked: false },
      { id: "sub14", text: "ROTEM Algorithm", isBookmarked: false },
      { id: "sub15", text: "Paediatric Cardiac Anaesthesia", isBookmarked: false },
      { id: "sub16", text: "Common Cardiac Conditions", isBookmarked: false },
      { id: "sub17", text: "Cardiac Catheterization", isBookmarked: false }
    ]
  },
  {
    id: "7",
    title: "Diagnostic Imaging",
    subtitles: [
      { id: "sub18", text: "Diagnostic Imaging", isBookmarked: false }
    ]
  },
  {
    id: "8",
    title: "Sedation for Oncology Patients",
    subtitles: [
      { id: "sub19", text: "Sedation for Oncology Children", isBookmarked: false }
    ]
  },
  {
    id: "9",
    title: "Regional Anaesthesia",
    subtitles: [
      { id: "sub20", text: "Central Neraxial Block", isBookmarked: false },
      { id: "sub21", text: "Regional Anaesthesia Workflow", isBookmarked: false },
      { id: "sub22", text: "Current Trends", isBookmarked: false },
      { id: "sub23", text: "Peripheral Nerve Block", isBookmarked: false },
      { id: "sub24", text: "Local Anaesthetic Toxicity", isBookmarked: false },
      { id: "sub25", text: "Ultrasound Guided Blocks", isBookmarked: false }
    ]
  },
  {
    id: "10",
    title: "Patient Transport",
    subtitles: [
      { id: "sub26", text: "Patient Transport", isBookmarked: false }
    ]
  },
  {
    id: "11",
    title: "Item 11",
    subtitles: [
      { id: "sub27", text: "Miscellaneous Drugs", isBookmarked: false },
      { id: "sub28", text: "Antibiotics", isBookmarked: false }
    ]
  },
  {
    id: "12",
    title: "Item 12",
    subtitles: [
      { id: "sub29", text: "Paediatric Massive Transfusion Protocol", isBookmarked: false },
      { id: "sub30", text: "Transfusion Guidelines", isBookmarked: false }
    ]
  },
  {
    id: "13",
    title: "Item 13",
    subtitles: [
      { id: "sub31", text: "Post Adenotonsillectomy Bleeding", isBookmarked: false },
      { id: "sub32", text: "Latex Allergy", isBookmarked: false },
      { id: "sub33", text: "Suspected Anaphyaxis", isBookmarked: false },
      { id: "sub34", text: "Suspected Anaphylaxis", isBookmarked: false },
      { id: "sub35", text: "Local Anaesthetic Toxicity", isBookmarked: false },
      { id: "sub36", text: "Laryngospasm", isBookmarked: false },
      { id: "sub37", text: "Acute Epiglottitis", isBookmarked: false },
      { id: "sub38", text: "Malignant Hyperthermia", isBookmarked: false },
      { id: "sub39", text: "Hypercyanotic Tet Spells", isBookmarked: false }
    ]
  },
  {
    id: "14",
    title: "Item 14",
    subtitles: [
      { id: "sub40", text: "Advanced Paediatric Life Support", isBookmarked: false }
    ]
  },
  {
    id: "15",
    title: "Item 15",
    subtitles: [
      { id: "sub41", text: "Patient Controlled Analgesia", isBookmarked: false },
      { id: "sub42", text: "Alternative Modes of Analgesia", isBookmarked: false },
      { id: "sub43", text: "Epidurals", isBookmarked: false },
      { id: "sub44", text: "Pain in Children", isBookmarked: false },
      { id: "sub45", text: "Children's Pain Service", isBookmarked: false }
    ]
  },
  {
    id: "16",
    title: "Item 16",
    subtitles: [
      { id: "sub46", text: "Chronic Pain", isBookmarked: false }
    ]
  },
  {
    id: "17",
    title: "Item 17",
    subtitles: [
      { id: "sub47", text: "Normal Laboratory", isBookmarked: false }
    ]
  }
];


const BookmarkSubtitlesFlatList = () => {
  const [items, setItems] = useState(data);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSubtitleBookmark = (itemId, subtitleId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              subtitles: item.subtitles.map((subtitle) =>
                subtitle.id === subtitleId
                  ? { ...subtitle, isBookmarked: !subtitle.isBookmarked }
                  : subtitle
              ),
            }
          : item
      )
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const SubtitleItem = ({ subtitle, onPressBookmark }) => (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitleText} numberOfLines={1}>
        {subtitle.text}
      </Text>
      <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={onPressBookmark}
      >
        <Text style={styles.bookmarkButtonText}>
          {subtitle.isBookmarked ? "Unbookmark" : "Bookmark"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {item.subtitles.map((subtitle) => (
        <SubtitleItem
          key={subtitle.id}
          subtitle={subtitle}
          onPressBookmark={() => toggleSubtitleBookmark(item.id, subtitle.id)}
        />
      ))}
    </View>
  );

  return (
    
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkMode : styles.lightMode,
      ]}
    >
      <TopBar />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
        <StatusBar style={"dark"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkMode: {
    backgroundColor: "rgb(30, 30, 32)",
  },
  lightMode: {
    backgroundColor: "white",
  },
  flatList: {
    padding: 16,
  },
  headerContainer: {
    // backgroundColor: "black",
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "black",
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  subtitleText: {
    flex: 1,
    marginRight: 10,
  },
  bookmarkButton: {
    padding: 6,
    backgroundColor: "#3498db",
    borderRadius: 4,
  },
  bookmarkButtonText: {
    color: "white",
  },
});

export default BookmarkSubtitlesFlatList;
