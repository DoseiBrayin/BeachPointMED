import PropTypes from 'prop-types';
import { Modal } from './modal';
import { useModal } from '../hooks/userHook';
import { Buttom } from '../../components/Buttoms/Buttom';

export function CardUser({name, description, price}) {
    const {modal, toggle} = useModal()
    return (
        <div className='shadow-lg bg-white p-4 rounded flex flex-col'>
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='text-gray-600'>{description}</p>
            <span className='text-gray-500'>{price}</span>
            <Buttom text='Edit' onClick={toggle} />
            {modal && <Modal />}
        </div>
    )
}

CardUser.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};