const users=[];

function addUser(id , name , room){
    const user ={id , name , room};
    users.push(user);
    return { user };
}

function removeUser(id){
    const index = users.findIndex((user) => user.id===id);
    if(index !== -1){
        return (users.splice(index , 1)[0]);
    }
}

function getUser(id){
    return (users.find((user) => user.id===id));
}

function getUsersInRoom(room){
    return users.filter((user) => user.room===room );
}

module.exports = {addUser , removeUser , getUser , getUsersInRoom};