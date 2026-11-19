import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style ={{ flex: 1,}}>
    <View style={styles.container}>
      ...
      <Text style={styles.title}>ข้อ 1 - 6</Text>
      <Link href="/flexbox/ex01" style={styles.link}>
        <Text style={styles.linkText}>Ex01</Text>
      </Link>
      <Link href="/flexbox/ex02" style={styles.link}>
        <Text style={styles.linkText}>Ex02</Text>
      </Link>
      <Link href="/flexbox/ex03" style={styles.link}>
        <Text style={styles.linkText}>Ex03</Text>
      </Link>
      <Link href="/flexbox/ex04" style={styles.link}>
        <Text style={styles.linkText}>Ex04</Text>
      </Link>
      <Link href="/flexbox/ex05" style={styles.link}>
        <Text style={styles.linkText}>Ex05</Text>
      </Link>
      <Link href="/flexbox/ex06" style={styles.link}>
        <Text style={styles.linkText}>Ex06</Text>
      </Link>
      <Text style={styles.title}>ข้อ 7 - 12</Text>
       <Link href="/page2" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
      </Link>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
   title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
