import { connect } from 'react-redux';

import { selectSenders } from 'store/selectors/chat';
import { RootState } from 'store/slices';

interface StateProps {
    senders: string[];
}

export type ChatListProps =
    & StateProps;

const mapStateToProps = (state: RootState): StateProps => ({
    senders: selectSenders(state),
});

export const container = connect<StateProps, {}>(
    mapStateToProps,
);
