import React from 'react';
import {FollowingInProgress, UsersPageType} from "../../redux/store";
import User from "./User";
import Pagination from "../../common/Pagination/Pagination";

type UsersPropsType = {
    users: UsersPageType,
    pageSize: number,
    totalItemsCount: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<FollowingInProgress>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

const Users: React.FC<UsersPropsType> = ({
                                             users, totalItemsCount,
                                             pageSize, onPageChanged, currentPage, ...props
                                         }) => {
    return (
        <div>
            <div style={{
                fontSize: "xxx-large",
                display: "flex",
                justifyContent: "center",
                color: "orange",
                textShadow: "black 0 0 2px"
            }}>USERS
            </div>
            {/*<Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}*/}
            {/*           totalUsersCount={totalUsersCount}/>*/}
            <Pagination page={currentPage} pageCount={pageSize}
                        productTotalCount={totalItemsCount} getPage={onPageChanged}/>
            {/*<div>*/}
            {/*    {pages.map((p) => {*/}
            {/*        return <span*/}
            {/*            key={p + 1}*/}
            {/*            className={currentPage === p && styles.selectedPage}*/}
            {/*            onClick={(e) => {*/}
            {/*                onPageChanged(p)*/}
            {/*            }}>*/}
            {/*                {p} </span>*/}
            {/*    })}*/}
            {/*</div>*/}
            <div> {users.map((u: any) =>
                <User key={u.id} user={u}
                      followingInProgress={props.followingInProgress}
                      follow={props.follow} unfollow={props.unfollow}/>
            )}
            </div>
        </div>
    );
};

export default Users;