import React from 'react';
import ChatsSekelon from './ChatsSkeleton';
import UserItem from './UserItem';
import { useGetChats } from './useGetChats';

const Chats = ({ online }) => {
  const { chats, isLoading } = useGetChats();

  return (
    <section className='flex flex-col gap-1 py-3 overflow-hidden'>
      {isLoading ? (
        <ChatsSekelon />
      ) : chats.data.length >= 1 ? (
        <ul>
          {chats.data.map(chat => (
            <UserItem
              key={chat._id}
              onlineUsers={online}
              chatId={chat._id}
              isActive={chat.isActive}
              recipientUser={chat.userData[0]}
            />
          ))}
        </ul>
      ) : (
        <p className='py-4 px-2 text-light-text-2 dark:text-dark-text-2'>
          No chats available. Start chatting now.
        </p>
      )}
    </section>
  );
};

export default Chats;
