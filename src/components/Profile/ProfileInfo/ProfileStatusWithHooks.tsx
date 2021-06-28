import React, {ChangeEvent, useEffect, useState} from 'react';
//@ts-ignore
import s from "../ProfileInfo/ProfileInfo.module.css";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}


type OwnPropsType = ProfileStatusPropsType

const ProfileStatusWithHooks: React.FC<OwnPropsType> = (props) => {
        const [editMode, setEditMode] = useState(false)
        const [status, setStatus] = useState(props.status)

        useEffect(() => {
            setStatus(props.status)
        }, [props.status]);

        const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
        };
        const activatedEditMode = () => {
            setEditMode(true)
        }
        const deactivatedEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }
        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activatedEditMode}>{props.status || '======'}</span>
                </div>}
                {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivatedEditMode}
                    />
                </div>}
            </div>
        );
    }
;

export default ProfileStatusWithHooks;