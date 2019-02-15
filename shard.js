const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require('http');
const scarew = new Discord.ShardingManager('./root/app/server.js', {// Ana dosyanızın adını yazınız.
    totalShards: 'auto',
    token: "NTExMjMzOTY5NzM2Mzg0NTEy.D0BZnA.mMqJtEXC1lU4MMUNTACb-MFzus0"// Buraya tokeninizi yazınız.
});

scarew.spawn(); 

scarew.on('launch', shard => {
  console.log(`**${shard.id}** ID shard started.`)
});

setTimeout(() => {
    scarew.broadcastEval("process.exit()");
}, 21600000);
