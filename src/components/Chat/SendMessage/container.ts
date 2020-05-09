import { connect } from 'react-redux';

import { emitSendMessage } from 'store/thunks/chat';
import { ChatSocket } from 'components/ChatWatcher/Socket';

interface OwnProps {
    receiver: string;
}

interface DispatchProps {
    emitSendMessage: (message: Omit<ChatSocket.Message, 'sender'>) => void;
}

export type SendMessageProps =
    & OwnProps
    & DispatchProps;

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    emitSendMessage: (message: Omit<ChatSocket.Message, 'sender'>) =>
        dispatch(emitSendMessage(message)),
});

export const container = connect<{}, DispatchProps>(
    null,
    mapDispatchToProps,
);
