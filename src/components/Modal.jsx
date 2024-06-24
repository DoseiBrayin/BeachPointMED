import { useEffect } from 'react'
import { useSpring, animated, useTransition } from '@react-spring/web'

const Modal = ({ children, isOpen, onClose }) => {
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
    <animated.div style={styles} className="p-10 overlay fixed h-full w-full top-0 left-0 overflow-x-hidden overflow-y-hidden bg-[#00000080] z-10" onClick={onClose}>
        <animated.div style={springs} className="max-w-[500px] my-[2rem] mx-auto" onClick={e => e.stopPropagation()}>
            <div className="relative bg-white border-[1px] border-solid border-black bg-clip-padding rounded-xl p-[1rem]">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </animated.div>
    </animated.div>
  ))
}

const ModalHeader = ({ children }) => {
  return (
        <div>
            <div>{children}</div>
            <button onClick={onClose}>close</button>
        </div>
  )
}

const ModalBody = ({ children }) => {
  return (
        <div>
            <div>{children}</div>
            <button onClick={onClose}>close</button>
        </div>
  )
}

const ModalFooter = ({ children }) => {
  return (
        <div>
            <div>{children}</div>
            <button onClick={onClose}>close</button>
        </div>
  )
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
