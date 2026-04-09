const WebSocket = require('ws');

const PORT = 3055;
const wss = new WebSocket.Server({ port: PORT });

const channels = new Map();

wss.on('connection', (ws) => {
  let currentChannel = null;

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString());

      if (message.type === 'join') {
        currentChannel = message.channel;
        if (!channels.has(currentChannel)) {
          channels.set(currentChannel, new Set());
        }
        channels.get(currentChannel).add(ws);
        console.log(`Client joined channel: ${currentChannel}`);
        ws.send(JSON.stringify({ type: 'joined', channel: currentChannel }));
        return;
      }

      if (currentChannel && channels.has(currentChannel)) {
        for (const client of channels.get(currentChannel)) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(data.toString());
          }
        }
      }
    } catch (e) {
      console.error('Error processing message:', e.message);
    }
  });

  ws.on('close', () => {
    if (currentChannel && channels.has(currentChannel)) {
      channels.get(currentChannel).delete(ws);
      if (channels.get(currentChannel).size === 0) {
        channels.delete(currentChannel);
      }
    }
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);
