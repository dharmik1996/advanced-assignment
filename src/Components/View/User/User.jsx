import React, {useEffect, useState} from 'react'
import {Row} from 'antd';
import UserCard from '../../Common/UserCard';
import HttpsAction from "../../../HttpsAction";

const INITIAL_STATE = {
    userData: []
};


const User = () => {

    /** Common State **/
    const [state, setState] = useState(INITIAL_STATE)

    /** Getting User List **/
    const getUser = async () => {
        try {
            const response = await HttpsAction({url: 'https://jsonplaceholder.typicode.com/users'})
            setState((prevState) => ({
                ...prevState,
                userData: response.data
            }))
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        (async () => {
            await getUser()
        })()
    }, []);

    return (
        <div>
            <Row>
                {
                    state.userData?.map((eachUser,index) =>
                        <UserCard user={eachUser} index={index} key={eachUser.id}/>
                    )
                }
            </Row>
        </div>
    )
}

export default User
