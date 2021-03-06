import { connect } from 'react-redux';

import { selectSenders } from 'store/selectors/chat';
import { RootState } from 'store/slices';

interface OwnProps {
    onChatClick: (sender: string) => void;
}

interface StateProps {
    senders: string[];
}

export type ChatListProps =
    & OwnProps
    & StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
    senders: selectSenders(state),
});

export const container = connect<StateProps, {}>(
    mapStateToProps,
);
