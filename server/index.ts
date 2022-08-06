import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { randomUUID } from 'node:crypto';
import {
  addDoc, collection, getDoc, getFirestore,
} from 'firebase/firestore';
import googleFirebase from '@packages/firebase';
import { initializeApp } from 'firebase/app';
import { User } from 'firebase/auth';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.use(cors());

const firebaseApp = initializeApp(googleFirebase.firebaseConfig);
const db = getFirestore(firebaseApp);

app.get('/json', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

io.on('connection', (socket) => {
  socket.on('join-lobby', async (data: {user: User, lobbyCode?: string}) => {
    if (!data.lobbyCode) {
      const uuid = randomUUID();

      const lobby = await addDoc(collection(db, 'lobby'), {
        socket: socket.id,
        code: uuid,
        createdBy: data.user.email,
      });

      const docSnap = await getDoc(lobby);

      console.log(docSnap.exists(), docSnap.data());
      socket.emit('lobby', lobby);
    }
  });
});

httpServer.listen(3000, () => {
  console.log('Votre app est disponible sur localhost:3000 !');
});
