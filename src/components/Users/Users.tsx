import {FC} from 'react';
import {UserType} from "../../redux/store";
import {Pagination} from "../../common/Pagination/Pagination";
import style from './Users.module.css'
import {User} from "./User";


type UsersPropsType = {
  users: Array<UserType>,
  pageSize: number,
  totalItemsCount: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void
  followingInProgress: Array<number>
  follow: (userId: string) => void,
  unfollow: (userId: string) => void,
}

export const Users: FC<UsersPropsType> = ({
                                            users,
                                            totalItemsCount,
                                            pageSize,
                                            onPageChanged,
                                            currentPage,
                                            ...props
                                          }) => {
  return (
    <div>
      <div className={style.titleStyle}>USERS
      </div>
      <Pagination page={currentPage} pageCount={pageSize}
                  productTotalCount={totalItemsCount} getPage={onPageChanged}
      />
      <div>
        {users.map(u =>
          <User key={u.userId} user={u}
                followingInProgress={props.followingInProgress}
                follow={props.follow} unfollow={props.unfollow}
          />
        )}
      </div>
    </div>
  );
};
