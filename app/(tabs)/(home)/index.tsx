import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import ArticleCard from "../../../components/article-card";
import { Article, ARTICLES } from "@/data/articles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function ArticleList() {
  const handlePress = (article: Article) => {
    router.push({
      pathname: "/(home)/[id]",
      params: { id: article.id },
    });
  };
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [...new Set(ARTICLES.map((a) => a.category))];

  const filtered = selectedCategory
    ? ARTICLES.filter((item) => item.category === selectedCategory)
    : ARTICLES;

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ArticleCard article={item} onPress={handlePress} />
        )}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <ScrollView horizontal>
            {[null, ...categories].map((cat) => (
              <Pressable
                key={cat ?? "all"}
                onPress={() => setSelectedCategory(cat)}
                style={{
                  padding: 8,
                  margin: 10 ,
                  borderRadius: 20,
                  backgroundColor: selectedCategory === cat ? "#0D9488" : "#fff",
                }}
              >
                <Text>{cat ?? "All"}</Text>
              </Pressable>
            ))}
          </ScrollView>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F4F8" },
  list: { paddingTop: 12, paddingBottom: 32 },
  listHeader: { paddingHorizontal: 16, paddingBottom: 8 },
  listHeaderText: {
    fontSize: 12,
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
