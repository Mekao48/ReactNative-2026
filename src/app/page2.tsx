import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ยินดีต้อนรับสู่หน้าจอที่ 2!</Text>
      <Text style={styles.subtitle}>นี่คือตัวอย่างหน้าจอ React Native</Text>
      <Link href="/flexbox/ex07" style={styles.link}>
        <Text style={styles.linkText}>Ex07</Text>
      </Link>
      <Link href="/flexbox/ex08" style={styles.link}>
        <Text style={styles.linkText}>Ex08</Text>
      </Link>
      <Link href="/flexbox/ex09" style={styles.link}>
        <Text style={styles.linkText}>Ex09</Text>
      </Link>
      <Link href="/flexbox/ex10" style={styles.link}>
        <Text style={styles.linkText}>Ex10</Text>
      </Link>
       <Link href="/flexbox/ex11" style={styles.link}>
        <Text style={styles.linkText}>Ex11</Text>
      </Link>
       <Link href="/flexbox/ex12" style={styles.link}>
        <Text style={styles.linkText}>Ex12</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});

