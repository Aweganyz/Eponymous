import {
    enqueryFail,
    enqueryRequest,
    enquerySuccess,

} from '../slices/design';
import axios from 'axios';


export const designers = (userData) => async (dispatch) => {

    try {
        dispatch(enqueryRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data }  = await axios.post(`/api/v1/desiger`,userData, config);
        dispatch(enquerySuccess(data))
    } catch (error) {
        dispatch(enqueryFail(error.response.data.message))
    }

}

