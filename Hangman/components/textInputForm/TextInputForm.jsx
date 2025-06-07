import TextInput from "../textInput/textInput";
import Button from "../buttons/Button";


function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}){
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label="Enter The Word to be guessed"
                    placeholder="Enter The word/phrase here...." 
                    onChangehandler={handleTextInputChange}
                />
            </div>

            <div>
                <Button
                    text={inputType === "password" ? "Show" : "Hide"}
                    styleType="secondary"
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                    type="submit"
                    text="Submit"
                    styleType="primary"
                />
            </div>
        </form>
    )
}

export default TextInputForm;