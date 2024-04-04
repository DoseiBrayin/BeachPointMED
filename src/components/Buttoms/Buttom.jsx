import PropTypes from 'prop-types';

export function Buttom({text, onClick}) {
    return (
        <button className='bg-yellow-200 p-2 rounded' onClick={onClick}>{text}</button>
    )
}

Buttom.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};
