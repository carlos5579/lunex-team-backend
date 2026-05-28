import express from "express";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const app = express();

app.use(express.json());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`Bot online als ${client.user?.tag}`);
});

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "LUNEX Backend läuft"
  });
});

app.listen(process.env.PORT, () => {
  console.log(`API läuft auf Port ${process.env.PORT}`);
});

client.login(process.env.DISCORD_TOKEN);