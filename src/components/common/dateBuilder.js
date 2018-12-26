import * as moment from 'moment';

const DateBuilder = (date) => {
    const newDt = moment(date, 'DD-MM-YYYY').toDate();
    return new Date(newDt);
}

const DateStringToFromat = (date) => {
    return moment(new Date(date)).format("DD/MM/YYYY");
}

export {DateBuilder, DateStringToFromat}