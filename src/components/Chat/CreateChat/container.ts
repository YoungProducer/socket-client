import { connect } from 'react-redux';

import { emitCreateChat } from 'store/thunks/chat';

interface DispatchProps {
    emitCreateChat: (contact: string) => void;
}

export type CreateChatProps =
    & DispatchProps;

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
    emitCreateChat: (contact: string) =>
        dispatch(emitCreateChat(contact)),
});

export const container = connect<{}, DispatchProps>(
    null,
    mapDispatchToProps,
);
