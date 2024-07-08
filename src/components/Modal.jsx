import { useEffect, useContext, createContext } from 'react'
import { useSpring, animated, useTransition } from '@react-spring/web'

const ModalContext = createContext()

const ModalClass = 'p-[1rem]'

const Modal = ({ children, isOpen, onClose, className, classNamePadre }) => {
  const handleEscape = e => {
    if (e.keyCode === 27) {
      onClose()
    }
  }

  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
      duration: 300
    }
  })

  const springs = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    config: {
      duration: 300
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return modalTransition((styles, isOpen) => isOpen && (
    <animated.div style={styles} className='p-10 overlay fixed h-full w-full top-0 left-0 overflow-x-hidden overflow-y-hidden bg-[#00000080] z-10' onClick={onClose}>
        <animated.div style={springs} className={classNamePadre || 'max-w-[500px] my-[2rem] mx-auto'} onClick={e => e.stopPropagation()}>
            <div className={className || 'relative bg-white border-[1px] border-solid border-gray-200 bg-clip-padding rounded-xl flex flex-col'}>
                <ModalContext.Provider value={{ onClose }}>
                {children}
                </ModalContext.Provider>
            </div>
        </animated.div>
    </animated.div>
  ))
}

const DissmissButton = ({ children, className }) => {
  const { onClose } = useContext(ModalContext)
  return (
    <button className={className} onClick={onClose}>
      {children}
    </button>
  )
}

const ModalHeader = ({ children, className, closeVisible }) => {
  return (
        <div className={`${ModalClass} ${className}`}>
            <div className='leading-4 font-base'>{children}</div>
            <DissmissButton onclose={onclose} className={closeVisible ? 'border-none text-base p-[0.25rem] cursor-pointer text-[#00000080] font-bold bg-transparent' : 'hidden'}>
                &times;
            </DissmissButton>
        </div>
  )
}

const ModalBody = ({ children, classNamePadre, classNameHijo }) => {
  return (
        <div className={`${ModalClass} ${classNamePadre}`}>
            <div className={`${classNameHijo}`}>{children}</div>
        </div>
  )
}

const ModalFooter = ({ children, className }) => {
  return (
        <div className={`${ModalClass} flex justify-end border-t-[1px]`}>
            <div className={`${className}`}>{children}</div>
        </div>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.DissmissButton = DissmissButton

export default Modal
