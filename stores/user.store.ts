interface UserStore {
  firstName: string | null;
  lastName: string | null;
  userAccountId: string | null;
  userProfileId: string | null;
}

export default defineStore("user", {
  state: (): UserStore => ({
    firstName: null,
    lastName: null,
    userAccountId: null,
    userProfileId: null,
  }),
  actions: {
    async setUser(body: any) {},
  },
});
