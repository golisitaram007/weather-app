import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

const getDay = (epoch) => {
    const dt = new Date(epoch * 1000);
    const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const date = `${months[dt.getMonth()]} ${dt.getDate()} ${dt.getFullYear()}`
    return date;
}

export default function DayWeatherList(props) {
  return (
    <div>
      <Collection>
        {
            props.weather.map((each,ind) => (
                <CollectionItem key={ind} className="blue-grey darken-1 white-text">
                    <span>{each.currently.temperature}</span>
                    <small><sup>o</sup></small> Celsius - &nbsp;
                    <span>{each.currently.summary}</span> - &nbsp;
                    <span>{getDay(each.currently.time)}</span>
                </CollectionItem>
            ))
        }
      </Collection>
    </div>
  )
}
