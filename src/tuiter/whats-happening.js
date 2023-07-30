import React, {useState} from "react";
import { AiOutlinePicture } from "react-icons/ai"
import { BsEmojiSmile, BsFiletypeGif } from "react-icons/bs"
import { MdFormatListBulletedAdd } from 'react-icons/md'
import { TbCalendarStats } from 'react-icons/tb'
import {CiLocationOn} from 'react-icons/ci'
import {BiBold, BiItalic} from 'react-icons/bi'
import { createTuit } from "./reducers/tuit-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
            }
            dispatch(createTuit(newTuit));
            setWhatsHappening("");
    }
    return (
        <div className="row">
        <div className="col-auto">
        <img src="/images/nasa.png" width={60}/>
        </div>
        <div className="col-10">
        <textarea value={whatsHappening} placeholder="What's happening?"
        className="form-control border-0"
        onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
        <div>
        <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
        onClick={tuitClickHandler}>
        Tuit
        </button>
        <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3"/>
            <BsFiletypeGif className="me-3"/>
            <MdFormatListBulletedAdd className="me-3"/>
            <BsEmojiSmile className="me-3"/>
            <TbCalendarStats className="me-3"/>
            <CiLocationOn className="me-3"/>
            <BiBold className="me-3"/>
            <BiItalic className="me-3"/>
        {/* < className="me-3"/> */}
        </div>
        </div>
        </div>
        <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;