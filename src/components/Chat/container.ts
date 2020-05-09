import { connect } from 'react-redux';

import {
    selectChatList,
    selectJoined,
} from 'store/selectors/chat';
import { Chat } from 'store/slices/chat';
import { RootState } from 'store/slices';

interface StateProps {
    chatList: Chat[];
    joined: boolean;
}

export type ChatProps =
    & StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
    chatList: selectChatList(state),
    joined: selectJoined(state),
});

export const container = connect<StateProps, {}>(
    mapStateToProps,
);
