function TextInput({type = "text", label, placeholder = "Enter your input here", value, onChangehandler}){
    return(
        <label>
            <span className="text-gray-700">{label}</span>
            <input 
                type={type}
                className="border-2 border-gray-500 rounded-md px-4 py-2 w-full"
                placeholder={placeholder}
                //value={value}
                onChange={onChangehandler}
            /> 
        </label>
    )
}

export default TextInput;