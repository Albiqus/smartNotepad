import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/redux-store';
import { DeleteButton, Description, EditButton, FavoriteButton, Main, Title, UnfavoriteButton, } from './CurrentNote-styles';


export const CurrentNote = () => {

    const dispatch = useDispatch()

    const notes: any = useSelector((state: RootState) => state.main.notes)
    const currentNoteId: String = useSelector((state: RootState) => state.main.currentNoteId)

    const currentNote = notes.find(note => note.id === currentNoteId)
    const { title, description, isFavorite, id } = currentNote || {}

    const onDeleteNoteClick = (e: any) => {
        dispatch({ type: 'DELETE_NOTE', payload: { id } })
    }

    const onSetFavoriteClick = () => {
        dispatch({ type: 'SET_IS_FAVORITE_NOTE', payload: { id } })
    }

    const onEditNoteClick = () => {
        dispatch({ type: 'SET_IS_NOTE_EDIT', payload: { status: true } })
        dispatch({ type: 'SET_EDITOR_STATUS', payload: { status: true } })
    }

    const onNoteDoubleClick = () => onEditNoteClick()

    return currentNote && (
        <Main onDoubleClick={onNoteDoubleClick}>
            <Title>{title}</Title>
            {isFavorite && <UnfavoriteButton onClick={onSetFavoriteClick}></UnfavoriteButton>}
            {!isFavorite && <FavoriteButton onClick={onSetFavoriteClick}></FavoriteButton>}
            <EditButton onClick={onEditNoteClick}></EditButton>
            <Description>{description}</Description>
            <DeleteButton onClick={onDeleteNoteClick}></DeleteButton>
        </Main>
    )
}