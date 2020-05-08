import { connect } from 'react-redux';

import { joinAction } from 'store/slices/chat';

interface DispatchProps {
    join: (userId: string) => void;
}

export type ChatJoinProps =
    & DispatchProps;

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    join: (userId: string) => dispatch(joinAction(userId)),
});

export const container = connect<{}, DispatchProps>(
    null,
    mapDispatchToProps,
);
