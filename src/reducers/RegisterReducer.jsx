  export const initialState = {
        firstName : '',
        lastName : '',
        username : '',
        password : '',
        c_passwrod : '',
        'image': null,
        errors: {},
    };


    export const RegisterReducer = (state, action) => {
        switch (action.type) {
           case 'updateField': {
            const { field, value, inputType, files } = action;
            return {
                ...state,
                [field]: inputType === 'file' && files?.length ? files[0] : value,
            };
        }

            default:
                break;
        }

    }
