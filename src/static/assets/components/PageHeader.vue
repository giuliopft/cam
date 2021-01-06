<template>
  <div id="page-header">
    <div id="page-title">
      <h1>CARDS AGAINST MANKIND</h1>
    </div>
    <div id="page-subtitle">
      <h2>
        A
        <a
          href="https://www.cardsagainsthumanity.com"
          class="invisible-link"
          target="_blank"
          >Cards Against Humanity</a
        >
        clone{{ info }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: ``
    }
  },
};
</script>

<style lang="scss">
@use '../stylesheets/colors';

#page-header {
  text-align: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  right: 0;
}

#page-title {
  background-color: colors.$primary-color;
}

#page-subtitle {
  background-color: colors.$primary-color-d;
}
</style>