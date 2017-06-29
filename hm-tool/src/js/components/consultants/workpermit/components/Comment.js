/**
 * Created by se90514 on 2017-06-24.
 */

import React from 'react';


export default ({
    comments,
    onCommentChange,
    commentAreaDisabled,
    sendButtonDisabled,
})=> (
    <div class="input-group">
        <textarea class="form-control custom-control" rows="2" disabled={commentAreaDisabled} onChange={onCommentChange}>{comments}</textarea>
        <span class="input-group-addon btn btn-primary" disabled={sendButtonDisabled}>Send</span>

    </div>


);