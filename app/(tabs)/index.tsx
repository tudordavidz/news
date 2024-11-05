import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { NewsDataType } from "@/types";
import BreakingNews from "@/components/BreakingNews";
import Categories from "@/components/Categories";
import NewsList from "@/components/NewsList";
import Loading from "@/components/Loading";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

type Props = {};

const Page = (props: Props) => {
  const { top: safeTop } = useSafeAreaInsets();
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [news, setNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      await getBreakingNews();
      await getNews();
      setIsLoading(false); // Ensure loading state is updated after both calls
    };

    fetchNews();
  }, []);

  const getBreakingNews = async () => {
    try {
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&image=1&removeduplicate=1&size=5`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setBreakingNews(response.data.results);
      }
    } catch (error: any) {
      console.error("Error in fetching breaking news", error.message);
    }
  };

  const getNews = async (category: string = "") => {
    try {
      let categoryString = "";
      if (category.length !== 0) {
        categoryString = `&category=${category}`;
      }
      const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&image=1&removeduplicate=1&size=10${categoryString}`;
      const response = await axios.get(URL);
      if (response && response.data) {
        setNews(response.data.results); // Update the `news` state
      }
    } catch (error: any) {
      console.error("Error in fetching news", error.message);
    }
  };

  const onCatChanged = (category: string) => {
    console.log("Category changed", category);
    setNews([]); // Clear the news list
    getNews(category); // Fetch news for the selected category
  };

  return (
    <ScrollView style={[styles.container, { paddingTop: safeTop }]}>
      <Header />
      <SearchBar />
      {isLoading ? (
        <Loading size={"large"} />
      ) : (
        <BreakingNews newsList={breakingNews} />
      )}
      <Categories onCategoryChanged={onCatChanged} />
      <NewsList newsList={news} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Page;
