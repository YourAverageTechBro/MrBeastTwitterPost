import styles from "../styles/Home.module.css";
//Import package
import { Client, auth } from "twitter-api-sdk";

// Initialize auth client first
const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID ?? "",
  client_secret: process.env.CLIENT_SECRET ?? "",
  callback: "YOUR-CALLBACK",
  scopes: ["tweet.read", "users.read", "offline.access"],
});

// Pass auth credentials to the library client
const twitterClient = new Client(authClient);

export default function Home() {
  return <div className={styles.container}>hello world</div>;
}
