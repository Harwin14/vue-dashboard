<template>
  <div class="w-full bg-gray-100">
    <div class="flex justify-between items-center h-[50px]">
      <div class="p-4 cursor-pointer hover:bg-gray-50" @click="clickHamburger">
        <i class="pi pi-bars"></i>
      </div>
      <div class="py-2">
        <InputText type="text" v-model="value" class="h-[40px]" placeholder="Search..." />
      </div>
      <div class="flex space-x-3 items-center justify-center px-3">
        <div class="text-md">Admin</div>
        <Avatar
          icon="pi pi-user"
          class="mr-2"
          style="background-color: #9c27b0; color: #ffffff"
          shape="circle"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
        />
        <div class="card flex justify-content-center">
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
          <Toast />
        </div> 
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: {
    dataOpenSideBar: Boolean,
    clickHamburger:Function
  },
  data() {
    return {
      items: [
        {
          label: 'logout',
          icon: 'pi pi-refresh',
          command: () => {
            this.$toast.add({
              severity: 'success',
              summary: 'Updated',
              detail: 'Data Updated',
              life: 3000
            })
          }
        },
        {
          label: 'Change Password',
          icon: 'pi pi-times',
          command: () => {
            this.$toast.add({
              severity: 'warn',
              summary: 'Delete',
              detail: 'Data Deleted',
              life: 3000
            })
          }
        }
      ]
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event)
    },
    save() {
      this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 })
    }
  }
}
</script>

<style></style>
