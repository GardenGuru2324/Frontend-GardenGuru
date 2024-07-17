import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { User } from "../models/user/User";
import { getUserProfile } from "../services/users/userProfile";

const useUserProfile = (userId: string) => {
  const { data, isError, isLoading, error } = useQuery<User, AxiosError>(["userProfile"], () => getUserProfile(userId));

  return {
    profile: data,
    isError,
    isLoading,
    error,
  };
};

export default useUserProfile;
