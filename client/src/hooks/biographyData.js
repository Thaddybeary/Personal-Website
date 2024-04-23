import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/biotext";

function useBiographyData() {
  const [data, setData] = useState({
    profilePicture: null,
    bioText: "",
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    async function fetchBiographyData() {
      setData((prev) => ({ ...prev, isLoading: true }));
      try {
        const bioResponse = await fetch(`${API_URL}/bioText`);
        const profilePicResponse = await fetch(`${API_URL}/profilePictureRoutes`);
        if (!bioResponse.ok || !profilePicResponse.ok)
          throw new Error("Failed to fetch data");

        const bioData = await bioResponse.json();
        const profilePicData = await profilePicResponse.json();

        setData({
          bioText: bioData.text,
          profilePicture: profilePicData.url,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    }

    fetchBiographyData();
  }, []);

  const updateBiography = async (bioText) => {
    setData((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(`${API_URL}/biography`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: bioText }),
      });
      if (!response.ok) throw new Error("Failed to update biography");

      setData((prev) => ({
        ...prev,
        bioText: bioText,
        isLoading: false,
        error: null,
      }));
    } catch (error) {
      setData((prev) => ({ ...prev, isLoading: false, error: error.message }));
    }
  };

  const updateProfilePicture = async (profilePicture) => {
    try {
      const response = await fetch(`${API_URL}/updateProfilePicture`, {
        method: "POST",
        body: profilePicture,
      });
      if (!response.ok) throw new Error("Failed to update profile picture");
      const updatedData = await response.json();
      setData((prev) => ({ ...prev, profilePicture: updatedData.url }));
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
  };

  return {
    data,
    updateBiography,
    updateProfilePicture,
  };
}

export default useBiographyData;
