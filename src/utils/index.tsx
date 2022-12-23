import { ApiItem } from '../constants/modelConstants';
import { months } from '../constants/modelConstants';

export const normalizeDates = (list: Array<ApiItem>) => {
    const parsedList = [...list];

    for (let i = 0; i < parsedList.length; i++) {
        let date = new Date(parsedList[i].createdAt);
        const day = date.getDay();
        const month = months.filter(value => value.number === date.getMonth())[0].title;
        const year = date.getFullYear();
        const string = `${day} de ${month}, ${year}`;
        parsedList[i].createdAt = string;
    }

    return parsedList;
};
