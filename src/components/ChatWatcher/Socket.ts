import io from 'socket.io-client';

export namespace ChatSocket {
    export interface Message {
        sender: string;
        receiver: string;
        body: string;
    }

    export type MessageStatus = 'Sent!' | 'Received!';

    export interface IncomingMessage {
        status: MessageStatus;
        data: Message;
    }
    export interface Controller {
        instance: SocketIOClient.Socket;
        sendMessage: (message: Message) => void;
        unsubscribe: (userId: string) => void;
        disconnect: () => void;
    }
}

export class ChatSocket implements ChatSocket.Controller {
    public instance!: SocketIOClient.Socket;

    connect() {
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

    sendMessage(message: ChatSocket.Message) {
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

export const chatSocket = new ChatSocket();
