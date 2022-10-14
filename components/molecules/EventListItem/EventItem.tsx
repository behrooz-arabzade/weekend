import React, { FC } from 'react';



//Component
import EventListItem from "components/molecules/EventListItem/EventListItem";
import EventWithoutDetail from './EventWithoutDetail';



//InterFace
interface IEventItem {

    withDetails: boolean;

}



const EventItem: FC<IEventItem> = ({
    withDetails
}) => {

    const tag = ["pool"]


    return (
        <div>

            {
                withDetails
                    ? <EventListItem
                        imageSrc="Images/pool.jpg"
                        eventId={234}
                        name="pool party"
                        onEventClicked={(id) => {

                            alert(`go to page ${id}`)

                        }}
                        startDate="2022/06/12"
                        endDate="2022/06/24"
                        tags={tag}
                        address="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        minUser={20}
                        maxUser={80}
                        startHour={19}
                        endHour={21}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        ownerUsername="Aryan_Salemabadi"
                        ownerPicSrc="Images/Aryan.jpg"
                    />
                    : <EventWithoutDetail
                        imageSrc="Images/pool.jpg"
                        eventId={234}
                        name="pool party"
                        onEventClicked={(id) => {

                            alert(`go to page ${id}`)

                        }}
                        startDate="2022/06/12"
                        endDate="2022/06/24"
                        tags={tag}
                        startHour={19}
                        endHour={21}
                    />
            }

        </div>
    )
}

export default EventItem;