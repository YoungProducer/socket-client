import {
    chatReducer,
    addMessageAction,
    setChatListAction,
    addChatAction,
    joinAction,
    Chat,
} from '../chat';

describe('Chat List slice', () => {
    test('setChatListAciton should correct set chatList property', () => {
        const initialState = {
            chatList: [],
        } as Chat.State;

        const result = chatReducer(
            initialState,
            setChatListAction([{
                contact: 'foo',
                messages: [{
                    body: '123',
                    owner: 'foo',
                }],
            }]),
        );

        expect(result.chatList).toHaveLength(1);
        expect(result.chatList).toEqual([{
            contact: 'foo',
            messages: [{
                body: '123',
                owner: 'foo',
            }],
        }]);
    });

    test(`addMessageAction should create new chat if chat doesn't exist`, () => {
        const initialState = {
            chatList: [],
        } as Chat.State;

        const result = chatReducer(
            initialState,
            addMessageAction({
                contact: 'foo',
                owner: 'foo',
                body: '123',
            }),
        );

        expect(result.chatList).toHaveLength(1);
        expect(result.chatList[0]).toEqual({
            contact: 'foo',
            messages: [{
                owner: 'foo',
                body: '123',
            }],
        });
    });

    test(`addMessageAction should add new message to messages array of specific chat`, () => {
        const initialState = {
            chatList: [{
                contact: 'foo',
                messages: [{
                    body: '123',
                    owner: 'foo',
                }],
            }],
        } as Chat.State;

        const result = chatReducer(
            initialState,
            addMessageAction({
                owner: 'foo',
                contact: 'foo',
                body: '456',
            }),
        );

        expect(result.chatList[0].messages).toHaveLength(2);
    });

    test(`joinAction should set property 'joined' property to true and set userId prop`, () => {
        const initialState = {
            joined: false,
        } as Chat.State;

        const result = chatReducer(
            initialState,
            joinAction('foo'),
        );

        expect(result.joined).toBeTruthy();
        expect(result.userId).toBe('foo');
    });

    test(`addChatAction should add new element to chatList array`, () => {
        const initialState = {
            chatList: [{
                contact: 'foo',
                messages: [],
            }],
        } as Chat.State;

        const result = chatReducer(
            initialState,
            addChatAction({
                contact: 'abc',
                messages: [],
            }),
        );

        expect(result.chatList).toHaveLength(2);
    });
});
