
const chatCount = async (): Promise<{
    success: boolean;
    message: string;
    words_left:number;
  }> => {
    // Get tokens from session
    const tokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  
    // Get userId from sessionStorage
    const userId = sessionStorage.getItem("id");
  
    try {
      // Make a POST request to the "create-chat" API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/create-chat/:${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
  
      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        return { success: true, message:"", words_left: data.words_left}; // Assuming words_left is a number
      } else {
        // Handle error response
        const errorData = await response.json();
        return { success: false, message: errorData.message, words_left: 0 };
      }
    } catch (error) {
      // Handle network or other errors
      return { success: false, message: `Something went wrong!`, words_left: 0};
    }
  };
  
  export default chatCount;
  