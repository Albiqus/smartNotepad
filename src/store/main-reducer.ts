import { NOTES } from "../data"
import { getActualNotes } from "../utils/getActualNotes"


const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const SET_SORT_MODE = 'SET_SORT_MODE'
const ADD_NEW_NOTE = 'ADD_NEW_NOTE'
const DELETE_NOTE = 'DELETE_NOTE'
const SET_CURRENT_NOTE_ID = 'SET_CURRENT_NOTE_ID'
const SET_EDITOR_STATUS = 'SET_EDITOR_STATUS'
const SET_ERRORS = 'SET_ERRORS'
const SET_IS_FAVORITE_NOTE = 'SET_IS_FAVORITE_NOTE'
const SET_IS_NOTE_EDIT = 'SET_IS_NOTE_EDIT'
const UPDATE_NOTE = 'UPDATE_NOTE'


const startState = {
    notes: NOTES,
    currentNoteId: '1',
    searchValue: '',
    sortMode: 'all',
    noteEditorStatus: false,
    isNoteEdit: false,
    errors: null,
}

export const mainReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SEARCH_VALUE: {
            const actualNotes = getActualNotes(state.notes, state.sortMode, state.searchValue)
            return {
                ...state,
                searchValue: action.payload,
                currentNoteId: actualNotes.filter(note => note.title.toLowerCase().startsWith(action.payload.toLowerCase()))[0]?.id || null
            }
        }
        case SET_SORT_MODE: {
            const sortedNotes = getActualNotes(state.notes, action.payload.sortMode, state.searchValue)
            return {
                ...state,
                sortMode: action.payload.sortMode,
                currentNoteId: sortedNotes[0]?.id || null
            }
        }
        case ADD_NEW_NOTE: {
            let newNoteId = state.notes.length > 0
                ? String(+state.notes.at(-1).id + 1)
                : '1'
            let newNote = {
                id: newNoteId,
                title: action.payload.titleValue,
                description: action.payload.descriptionValue,
                isFavorite: action.payload.isFavorite,
            }
            return {
                ...state,
                notes: [...state.notes, newNote],
                currentNoteId: newNoteId
            }
        }
        case DELETE_NOTE: {
            const actualNotes = getActualNotes(state.notes, state.sortMode, state.searchValue)
            const isEmpty = actualNotes.filter(note => note.id !== action.payload.id).length === 0 ? true : false
            let newSortMode = state.sortMode;
            if (isEmpty && newSortMode === 'fav') {
                newSortMode = 'all'
            }
            return {
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.payload.id),
                currentNoteId: actualNotes.find(note => note.id !== action.payload.id)?.id || null,
                sortMode: newSortMode
            }
        }
        case SET_CURRENT_NOTE_ID: {
            return {
                ...state,
                currentNoteId: action.payload.id
            }
        }
        case SET_EDITOR_STATUS: {
            return {
                ...state,
                noteEditorStatus: action.payload.status
            }
        }
        case SET_ERRORS: {
            return {
                ...state,
                errors: action.payload
            }
        }
        case SET_IS_FAVORITE_NOTE: {
            return {
                ...state,
                notes: [...state.notes].map(note => {
                    if (note.id !== action.payload.id) return note
                    return { ...note, isFavorite: !note.isFavorite }
                })
            }
        }
        case SET_IS_NOTE_EDIT: {
            return {
                ...state,
                isNoteEdit: action.payload.status
            }
        }
        case UPDATE_NOTE: {
            return {
                ...state,
                notes: [...state.notes].map(note => {
                    if (note.id !== action.payload.id) return note
                    return { ...note, title: action.payload.title, description: action.payload.description }
                })
            }
        }

        default:
            return state;
    }
}