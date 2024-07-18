import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                    alt='Chat bubble'
                    src=''
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-red-500`}>Hi! What is up?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>09:30</div>
    </div>
  )
}

export default Message