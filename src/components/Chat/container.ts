import { connect } from 'react-redux';

import { selectChatList } from 'store/selectors/chat';
import { Chat } from 'store/slices/chat';
import { RootState } from 'store/slices';

interface StateProps {
    chatList: Chat[];
}

export type ChatProps =
    & StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
    chatList: selectChatList(state),
});

export const container = connect<StateProps, {}>(
    mapStateToProps,
);
