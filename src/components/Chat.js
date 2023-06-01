import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReply } from "../store/actions"

function Chat() {

    let [input, setInput] = useState("")
    let state = useSelector(state => state)
    let dispatch = useDispatch()

    function change(e) {
        setInput(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(fetchReply(input))
        setInput("")
    }

    return (
        <>
            <div className='root'>
                <form>
                    <input type="text" className='input' placeholder='Ask me anything.....' value={input} onChange={change} />
                    <button onClick={onSubmit} ><img src="download.png" /></button>
                </form>

                {
                    state.chat.length !== 0 && state.chat.map((v, index) => {
                        return (
                            <div className='message' key={index}>
                                <div className="user">
                                    <span>{"You : " + v.user}</span>
                                </div>
                                <div className="bot">
                                    {v.bot === "" ? <>Bot : <div className="loader"></div></> : <div>{"Bot : " + v.bot}</div>}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Chat