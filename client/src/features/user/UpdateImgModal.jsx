import { useUpdateUser } from './useUpdateUser';

const UpdateImgModal = ({ onClose }) => {
  const { updateUser, isUpdating } = useUpdateUser();

  const handleUploadd = image => {
    //Set new image
    const formData = new FormData();
    formData.append('profileImage', image);

    updateUser(formData, {
      onSuccess: () => onClose(),
    });
  };

  const handleRemove = () => {
    //Set back to default image
    updateUser(
      { profileImage: 'default.jpg' },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <section className='flex flex-col'>
      <h1 className='text-lg text-center text-light-text-1 dark:text-dark-text-1 mb-6'>
        Update your profile image
      </h1>
      <label
        htmlFor='update-image'
        className='w-full text-center font-semibold border-y border-light-border-1 py-3 cursor-pointer active:bg-light-bg-2 dark:active:bg-dark-bg-2'
      >
        Upload New Image
      </label>
      <input
        disabled={isUpdating}
        type='file'
        id='update-image'
        className='hidden'
        accept='image/*'
        onChange={e => handleUploadd(e.target.files[0])}
      />
      <button
        className='w-full font-semibold text-red-500  pt-3'
        onClick={handleRemove}
      >
        Remove Current Image
      </button>
    </section>
  );
};

export default UpdateImgModal;
