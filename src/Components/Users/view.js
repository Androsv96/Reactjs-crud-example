import React, { useEffect } from "react";

export default function Users({ state, getAllUsers }) {
  const { users, shouldFetchUsers, failGetAllUserMsg } = state.UsersReducer;

  useEffect(() => {
    if (shouldFetchUsers) getAllUsers();
  });

  if (failGetAllUserMsg) {
    alert(failGetAllUserMsg);
    return (
      <div>
        Hubo un fallo al realizar la petición, por favor intente nuevamente
        <button onClick={() => getAllUsers()}>Retry</button>
      </div>
    );
  }

  if (users.length > 0) {
    return (
      <div>
        {users.map((currObj, index) => {
          return (
            <li key={index}>
              {currObj.username} {currObj.name}
            </li>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        No hay usuarios actualmente, ¿desea verificar nuevamente?
        <button onClick={() => getAllUsers()}>Intentar</button>
      </div>
    );
  }
}
