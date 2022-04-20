import User from "./Friend/User";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination, LoadingOverlay, Loader } from "@mantine/core";
import loadGif from "../../img/pes.gif";
import { usePagination } from "@mantine/hooks";
import { Link } from "react-router-dom";

export default function Users({
  toggleFollow,
  users,
  totalUsers,
  activePage,
  usersPerPage,
  isLoad,
  changeHandler,
}) {
  const pagesAmount = Math.ceil(totalUsers / usersPerPage);
  const pagination = usePagination({
    total: pagesAmount,
    initialPage: activePage,
    onChange: changeHandler,
  });
  const usersElement = users?.map((f) => (
    <User
      key={f.id}
      name={f.name}
      desc={f.status}
      avatar={f.photos.small}
      followed={f.followed}
      clickHandler={() => toggleFollow(f.id)}
      id={f.id}
    />
  ));
  const paginationElements = pagination.range.map((num) => {
    if (num !== "dots") {
      return (
        <Link
          to={`${num}`}
          onClick={() => pagination.setPage(num)}
          className={`p-1 border-2 rounded-md ${
            num === activePage ? "bg-indigo-700 text-white" : ""
          } min-w-[40px] h-[40px] flex items-center justify-center select-none`}
        >
          {num}
        </Link>
      );
    } else {
      return <p className={"text-xl text-black select-none"}>{". . ."}</p>;
    }
  });
  return users === null ? (
    <Loader color={"violet"} className={"m-4"} />
  ) : (
    <div className="min-w-[50%] flex flex-col gap-2 relative">
      {isLoad && (
        <div className="absolute w-full h-full bg-white/40 flex justify-end transition-colors">
          <Loader color={"violet"} className={"m-4"} />
        </div>
      )}
      <div className="grid grid-cols-2 gap-1 grid-rows-4 min-h-[644px]">{usersElement}</div>
      <div className="flex mx-auto gap-3">{paginationElements}</div>
      {/*<Pagination*/}
      {/*  classNames={{*/}
      {/*    active: "bg-indigo-700",*/}
      {/*  }}*/}
      {/*  page={activePage}*/}
      {/*  onChange={changeHandler}*/}
      {/*  className="self-center"*/}
      {/*  total={pagesAmount}*/}
      {/*  color={"blue"}*/}
      {/*  radius="md"*/}
      {/*  withControls={false}*/}
      {/*  withEdges*/}
      {/*/>*/}
    </div>
  );
}
