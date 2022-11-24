import React from "react";
import { useParams } from "react-router-dom";
import ProductTable from "../ui/productTable";
// import EditUserPage from "../components/page/editUserPage";
// import UserPage from "../components/page/userPage";
// import UsersListPage from "../components/page/usersListPage";
// import UsersLoader from "../components/ui/hoc/usersLoader";
const Users = () => {
    const params = useParams();

    return (
        <>
            {
                <ProductTable
                    product={[]}
                    // onSort={handleSort}
                    // selectedSort={sortBy}
                    // onDelete={handleDelete}
                    // onToggleBookMark={handleToggleBookMark}
                />
            }
        </>
    );
};

export default Users;
