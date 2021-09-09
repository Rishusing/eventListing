import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar'


const Evevnt = () => {

    const history = useHistory();
    const [event, setEvent] = useState("");
    const [date, setDate] = useState("");
    const [msg, setMsg] = useState("");
    const [all, setPost] = useState([])
    const data = {event, date};
    const PostEvent = async (e) => {
        e.preventDefault();
        axios.post('https://new-mern-event-app.herokuapp.com/addEvent', { data })
            .then((res) => {
                setMsg("Event is added. Refresh page to see event");
            }).catch((err) => {
                setMsg("Login Please");
            });
    }

    const callEvent = async () => {
        axios.get('https://new-mern-event-app.herokuapp.com/findEvent')
        .then((res) => {
                setPost(res.data);
            }).catch((err) => {
                history.push('/login')
            });
    }

    if(Object.keys(all).length !== 0){
       var eve = all.map(ele => JSON.parse(ele))
    }
    useEffect(() => {
        callEvent();
    }, [])

    var key=0;
    return (
        <>
            <Navbar />
            <div className="homePage">
                <div className="event-container">
                    <div className="event-container-left">
                        {
                            eve === undefined ? <h2>No Data</h2>:eve.map((ele) => (
                                <div className="card" key={key++}><h3>{ele.event}</h3><br /><h4>{ele.date}</h4></div>
                            ))
                        }
                    </div>
                    <div className="event-container-right">
                        <div className="inputField">
                            <h4 id="msg">{msg}</h4>
                            <div className="title"><h2>Add Event</h2></div>
                            <div className="content">
                                <form method="POST">
                                    <div className="user-details">
                                        <div className="input-box">
                                            <span className="details">Event</span>
                                            <input type="text" name="title" value={event} placeholder="Title of Event"
                                                onChange={(e) => setEvent(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Date</span>
                                            <input type="date" name="date" value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="button">
                                        <input type="submit" value="ADD" name="addEvent" onClick={PostEvent} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evevnt
