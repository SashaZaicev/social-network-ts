import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";
import style from '../Dialogs.module.css'

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required, maxLength100]}
               name={'newMessageBody'}
               placeholder={'Enter your message'}
        />
      </div>
      <div>
        <button className={style.btnStyle}>Add message</button>
      </div>
    </form>)
}
export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
