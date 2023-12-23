const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<{
  success: boolean;
  message: string;
  token: string;
  name: string;
  userId: string;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      const data = await response.json();

      return {
        success: true,
        message: data.message,
        token: data.token,
        name: data.name,
        userId: data.id,
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message,
        token: "",
        name: "",
        userId: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Something went wrong!`,
      token: "",
      name: "",
      userId: "",
    };
  }
};

export default loginUser;
