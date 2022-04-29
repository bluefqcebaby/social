import { useDispatch, useSelector } from "react-redux";
import Content from "./Content";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProfile, fetchStatus } from "../../redux/slices/profileSlice";

export default function ContentContainer() {
  const state = useSelector(state => state.profilePage.profileInfoAPI);
  const status = useSelector(state => state.profilePage.status);
  const authId = useSelector(state => state.auth.id);
  let { userId } = useParams();
  const dispatch = useDispatch();
  const [profileLoading, setProfileLoading] = useState(false);
  const profileOfAuthorized = +userId === authId;
  const setStatus = text => {
    dispatch(fetchStatus(text));
  };
  useEffect(() => {
    const apiCall = async () => {
      setProfileLoading(true);
      await dispatch(fetchProfile(userId));
      setProfileLoading(false);
    };
    apiCall();
  }, [userId]);
  return (
    <Content
      data={state}
      profileLoading={profileLoading}
      ownerProfile={profileOfAuthorized}
      status={status}
      setStatus={setStatus}
    />
  );
}
