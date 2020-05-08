import io from 'socket.io-client';

interface Message {
    sender: string;
    receiver: string;
    body: string;
}

interface SocketController {
    socket: SocketIOClient.Socket;
    sendMessage: (message: Message) => void;
    unsubscribe: (userId: string) => void;
    disconnect: () => void;
}

export class Socket implements SocketController {
    public socket: SocketIOClient.Socket;

    constructor() {
        this.socket = io('http://localhost:4000', {
            transports: ['websocket'],
            upgrade: false,
            query: {
                userId: 'foo',
            },
        });

        this.socket.on('connect', () => {
            console.log('connected');
        });
    }

    join(userId: string) {
        this.socket.emit('join', { userId });
    }

    sendMessage(message: Message) {
        this.socket.emit('add-message', message);
    }

    chatList(userId: string) {
        this.socket.emit('chat-list', { userId });
    }

    unsubscribe(userId: string) {
        this.socket.emit('leaveChat', { userId });
    }

    disconnect() {
        this.socket.disconnect();
    }
}
