import { makeAutoObservable } from "mobx";

const UserStore: Object = makeAutoObservable({
    name: "1",
    setName() {
        this.name = "66";
    }
});

export default UserStore;