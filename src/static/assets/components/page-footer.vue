<template>
    <div id="page-footer">
        <p>This website is a <a href="https://www.cardsagainsthumanity.com" class="footer-link" target="_blank">Cards
                Against Humanity</a> clone, which is distributed under a <a
                href="http://creativecommons.org/licenses/by-nc-sa/2.0/" class="footer-link" target="_blank">CC-BY-NC-SA
                2.0</a> license. This website is neither endorsed nor sponsored by the original game authors. This
            website is distributed under the MIT license. Further information is available <a
                href="https://www.google.com" class="footer-link" target="_blank">here</a>. The source of this
            website
            is publicly available on <a href="https://github.com/giuliopft/cam" class="footer-link"
                target="_blank">GitHub</a>.</p>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@use '../stylesheets/colors';

#page-footer {
  text-align: center;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: colors.$secondary-color;
  color: colors.$footer-text;
  padding-bottom: 1px;
  padding-top: 1px;
  font-size: small;
}
</style>