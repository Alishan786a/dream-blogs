import { ConnectUserSlice ,User} from "@/types/store";

const authSlice = (
  set: (fn: (state: ConnectUserSlice) => ConnectUserSlice) => void,
  get: () => ConnectUserSlice,
) => ({
  isAuthenticated: false,
  user: null,
  isProfileLoading:true,
  setUser: (user:User|null,success:boolean) => set((pre)=>{
    return { ...pre,isAuthenticated: success, user }

  }
  ),
  setLoading: (state:boolean) => set((pre)=>{
    return { ...pre,isProfileLoading: state }

  }
  ),


});

export default authSlice;
