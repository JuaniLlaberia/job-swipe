export const updateUser = async userInfo => {
  const isFormData = userInfo instanceof FormData;

  const optionsRegular = {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo),
  };

  const optionsFormData = {
    method: 'PATCH',
    credentials: 'include',
    body: userInfo,
  };

  try {
    //Sending data with formData because of image
    const response = await fetch(
      'http://localhost:8000/api/user/update',
      isFormData ? optionsFormData : optionsRegular
    );

    // if(!response.ok)
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async () => {
  try {
    await fetch('http://localhost:8000/api/user/delete', {
      method: 'DELETE',
      credentials: 'include',
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/user', {
      method: 'GET',
      credentials: 'include',
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const swipeRight = async userId => {
  try {
    const response = await fetch('http://localhost:8000/api/swipes/right', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ swipedUserId: userId }),
    });

    //Check if everything is good!
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const swipeLeft = async userId => {
  try {
    const response = await fetch('http://localhost:8000/api/swipes/left', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ swipedUserId: userId }),
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
