const IntelliAI = async (query: {
  prompt: string;
}): Promise<{ success: boolean; response: string }> => {
  const tokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/intelliAI/generate-prompt`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens}`,
        },
        body: JSON.stringify(query),
      }
    );

    if (response.ok) {
      const res = await response.json();
      return { success: true, response: res.data };
    } else {
      const errorData = await response.json();
      return { success: false, response: errorData.message };
    }
  } catch (error) {
    return { success: false, response: `Something went wrong!` };
  }
};

export default IntelliAI;
