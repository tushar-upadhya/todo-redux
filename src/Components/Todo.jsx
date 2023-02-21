import React from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
    return (
        <>
            <div className="todo_data col-lg-6 mx-auto mt-2">
                <div
                    className="todo_container d-flex justify-content-between align-items-center px-2"
                    style={{
                        background: "#dcdde1",
                        borderRadius: "3px",
                        height: "45px",
                    }}
                >
                    <li style={{ listStyle: "none" }}>ReactJs</li>

                    <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center px-2">
                        <EditIcon
                            style={{ color: "#3c40c6", cursor: "pointer" }}
                        />

                        <DeleteIcon
                            style={{ color: "red", cursor: "pointer" }}
                        />

                        <VisibilityOffIcon
                            style={{ color: "#1dd1a1", cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
