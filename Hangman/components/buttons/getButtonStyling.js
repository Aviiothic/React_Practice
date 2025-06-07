// getButtonStyling.js
function getButtonStyling(styleType){
    switch(styleType){
        case 'primary':
            return 'bg-red-500 text-yellow-300';
        case 'secondary':
            return 'bg-blue-500 text-pink-300';
        default:
            return 'bg-green-500 text-black';
    }
}
export default getButtonStyling;
