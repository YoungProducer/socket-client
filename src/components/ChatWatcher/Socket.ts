import io from 'socket.io-client';

interface Message {
    sender: string;
    receiver: string;
    body: string;
}

interface ChatSocketController {
    instance: SocketIOClient.Socket;
    sendMessage: (message: Message) => void;
    unsubscribe: (userId: string) => void;
    disconnect: () => void;
}

export class ChatSocket implements ChatSocketController {
    public instance: SocketIOClient.Socket;

    constructor() {
        this.instance = io('http://localhost:4000', {
            transports: ['websocket'],
            upgrade: false,
            query: {
                userId: 'foo',
            },
        });

        this.instance.on('connect', () => {
            console.log('connected');
        });
    }

    join(userId: string) {
        this.instance.emit('join', { userId });
    }

    sendMessage(message: Message) {
        this.instance.emit('add-message', message);
    }

    chatList(userId: string) {
        this.instance.emit('chat-list', { userId });
    }

    unsubscribe(userId: string) {
        this.instance.emit('leaveChat', { userId });
    }

    disconnect() {
        this.instance.disconnect();
    }
}
