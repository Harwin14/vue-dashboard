<template>
  <div class="w-full h-full flex">
    <Sidebar :dataOpenSideBar = 'openSidebar'/>
    <div class="w-full h-full">
      <HeaderTop  :dataOpenSideBar = 'openSidebar' :clickHamburger="toggleSidebar"/>
      <div class="w-full h-[cal(100vh-50px)]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'
export default {
  components: {
    HeaderTop,
    Sidebar
  },
  data() {
    return {
      openSidebar: true
    }
  },
  methods:{
    toggleSidebar(){
      this.openSidebar = !this.openSidebar
    }
  }
}
</script>

<style></style>
