import { useDispatch, useSelector } from "react-redux";

import Users from "./Users";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePagination } from "@mantine/hooks";
import { fetchNewUsers, fetchFollow } from "../../redux/slices/usersSlice";

export default function UsersContainer() {
  const { users, allUsers, currentPage, contentPerPage, isLoad, isError } = useSelector(
    state => state.usersPage
  );
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const apiToggleFollow = async (id, followed) => {
    setLoad(true);
    await dispatch(fetchFollow({ id, followed }));
    setLoad(false);
  };

  const { pageNum } = useParams();

  useEffect(() => {
    dispatch(fetchNewUsers(+pageNum));
  }, []);

  const changeHandler = page => {
    dispatch(fetchNewUsers(page));
  };

  const pagesAmount = Math.ceil(allUsers / contentPerPage);
  const pagination = usePagination({
    total: pagesAmount,
    page: currentPage,
    onChange: changeHandler,
  });
  return (
    <Users
      users={users}
      isLoad={isLoad}
      pagination={pagination}
      activePage={currentPage}
      apiToggleFollow={apiToggleFollow}
      error={isError}
      buttonDisabled={load}
    />
  );
}
