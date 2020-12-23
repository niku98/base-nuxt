export default {
  staffs: {
    index: '/staffs',
    create: '/staffs/create',
    get detail() {
      return (id: string) => {
        return '/staffs/' + id
      }
    },
  },
}
