<template>
  <div id="app">
    <page-header ref="header" />
    <div id="content-and-footer">
      <div id="content">
      </div>
      <page-footer />
    </div>
  </div>
</template>

<script>
import PageFooter from "./assets/components/PageFooter.vue";
import PageHeader from "./assets/components/PageHeader.vue";
export default {
  components: {
    'page-header': PageHeader,
    'page-footer': PageFooter
  },
  data() {
    return {};
  },
  methods: {
    updateInfoInPageHeader(status) {
      this.$refs.header.info = status ? ` - ${status}` : ``;
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#content-and-footer {
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-direction: column;
}

#content {
  flex: 1;
}
</style>