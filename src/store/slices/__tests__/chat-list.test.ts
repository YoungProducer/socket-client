import {
    chatListReducer,
    addMessageAction,
    setChatListAction,
    Chat,
} from '../chat';

describe('Chat List slice', () => {
    test('setChatListAciton should correct set chatList property', () => {
        const initialState = {
            chatList: [],
        } as Chat.State;

        const result = chatListReducer(
            initialState,
            setChatListAction([{
                sender: 'foo',
                messages: ['123', '456'],
            }]),
        );

        expect(result.chatList).toHaveLength(1);
        expect(result.chatList).toEqual([{
            sender: 'foo',
            messages: ['123', '456'],
        }]);
    });

    test(`addMessageAction should create new chat if chat doesn't exist`, () => {
        const initialState = {
            chatList: [],
        } as Chat.State;

        const result = chatListReducer(
            initialState,
            addMessageAction({
                sender: 'foo',
                body: '123',
            }),
        );

        expect(result.chatList).toHaveLength(1);
        expect(result.chatList[0]).toEqual({
            sender: 'foo',
            messages: ['123'],
        });
    });

    test(`addMessageAction should add new message to messages array of specific chat`, () => {
        const initialState = {
            chatList: [{
                sender: 'foo',
                messages: ['123'],
            }],
        } as Chat.State;

        const result = chatListReducer(
            initialState,
            addMessageAction({
                sender: 'foo',
                body: '456',
            }),
        );

        expect(result.chatList[0].messages).toHaveLength(2);
    });
});
