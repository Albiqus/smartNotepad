import sound1 from './sounds/summer-forest.mp3'
import sound2 from './sounds/stream.mp3'
import sound3 from './sounds/bonfire.mp3'
import sound4 from './sounds/rain.mp3'
import sound5 from './sounds/night-sea.mp3'


export const DAYS = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
export const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export const SOUNDS = {
    'лето в лесу': sound1,
    'ручей': sound2,
    'костёр': sound3,
    'дождь': sound4,
    'ночное море': sound5
}
export const NOTES = [{
        id: '1',
        title: 'Уборка',
        description: 'Подмести в коридоре, помыть полы, пропылесосить в квартире.Протереть пыль в коридоре на полках. Вынести мусор',
        isFavorite: false
    },
    {
        id: '2',
        title: '12.04.2025',
        description: '12.04.2025 съездить в стоматологическую клинику по адресу ул.Пушкина, д.5',
        isFavorite: false
    },
    {
        id: '3',
        title: 'подарки НГ',
        description: 'Купить на новый год:\nсын - конструктор,\nжена - ирригатор,\nродители - новый диван',
        isFavorite: true
    },
    {
        id: '4',
        title: 'фильмы',
        description: 'Терминатор\nАгент Ева\nВсё могу\nДьявол среди нас\nКлаустрофобы: Квест В Москве\nСекрет\nУбийство по открыткам\nЧестный вор\nКалашников\nСуд над чикагской семьёй\nДовод',
        isFavorite: false
    }
]

export const ERRORS = {
    emptyTitle: 'поле должно быть заполнено',
    emptyDescription: 'поле должно быть заполнено',
}

export const themes = {
    light: {
        title: 'light',
        primaryColor: '#f3f3f3;',
        secondaryColor: '#c8c8c8',
        fontColor: 'black',
        hoverColor: '#555555',
        additionalColor: '#8f8f8f'
    },
    dark: {
        title: 'dark',
        primaryColor: '#7a7a7a;',
        secondaryColor: '#5a5a5a',
        fontColor: 'white',
        hoverColor: 'silver',
        additionalColor: '#383838'
    },
}