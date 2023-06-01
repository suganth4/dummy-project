import { Configuration, OpenAIApi } from "openai"

export const REPLY_TYPE = {
    REPLY_REQUESTED: "REPLY_REQUESTED",
    REPLY_SUCCEEDED: "REPLY_SUCCEEDED",
    REPLY_FAILED: "REPLY_FAILED"
}


export const replyRequest = (users) => {
    return {
        type: REPLY_TYPE.REPLY_REQUESTED,
        payload: users
    };
};

export const replySuccess = (users) => {
    return {
        type: REPLY_TYPE.REPLY_SUCCEEDED,
        payload: users,
    };
};

export const replyFailure = (error) => {
    return {
        type: REPLY_TYPE.REPLY_FAILED,
        payload: error,
    };
};

export const fetchReply = (data) => {
    return function (dispatch) {
        dispatch(replyRequest({
            user: data,
            bot: ""
        }));

        const configuration = new Configuration({
            apiKey: "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",
        });

        const openai = new OpenAIApi(configuration);

        openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: "user", content: data }]
        }).then(res => {
            let response = {
                user: data,
                bot: res.data.choices[0].message.content
            }

            dispatch(replySuccess(response))
        }).catch(err => {
            dispatch(replyFailure(err.message))
        })
    };
};