import { useDispatch, useSelector } from "react-redux";
import {
  changeIsLoadAC,
  setUsersAmountAC,
  setCurrentPageAC,
  setUsersAC,
  toggleFollowAC,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import {useEffect} from "react";
import axios from "axios";
import {Outlet, useParams} from 'react-router-dom';

export default function UsersContainer() {
  const { users, allUsers, currentPage, contentPerPage, isLoad } = useSelector(
    (state) => state.usersPage
  );
  const dispatch = useDispatch();
  const toggleFollow = (id) => {
    dispatch(toggleFollowAC(id));
  };
  const setUsers = (users) => {
    dispatch(setUsersAC(users));
  };
  const setAllUsers = (amount) => {
    dispatch(setUsersAmountAC(amount));
  };
  const toggleFetchStatus = () => {
    dispatch(changeIsLoadAC());
  }
  const {pageNum} = useParams();
  const setActivePage = (page) => dispatch(setCurrentPageAC(page));
  const baseUri = 'https://social-network.samuraijs.com/api/1.0';
  // const baseUri = "https://apidodiku.herokuapp.com/api";
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(
        `${baseUri}/users?page=${pageNum ?? currentPage}&count=${contentPerPage}`
      ,{
          withCredentials: true,
        });
      setAllUsers(response.data.totalCount);
      setUsers(response.data.items)
    };
    toggleFetchStatus()
    apiCall()
    toggleFetchStatus()
  }, []);

  const changeHandler = async (page) => {
    toggleFetchStatus()
    const result = await axios.get(
      `${baseUri}/users?page=${page}&count=${contentPerPage}`
    );
    setUsers(result.data.items);
    setActivePage(page);
    toggleFetchStatus()
  };
  return (
    <Users
      setUsersAmount={setAllUsers}
      toggleFollow={toggleFollow}
      users={users}
      totalUsers={allUsers}
      activePage={currentPage}
      usersPerPage={contentPerPage}
      isLoad={isLoad}
      changeHandler={changeHandler}
    />
  );
}
